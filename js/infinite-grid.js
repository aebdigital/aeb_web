// js/infinite-grid.js

document.addEventListener('DOMContentLoaded', () => {
    const portfolioItemsData = [
        { link: 'https://kovo-sklo.sk/', image: '../sources/aeb-portfolio/kovosklo.jpg', alt: 'Kovo Sklo' },
        { link: 'https://lerent.sk/', image: '../sources/aeb-portfolio/lerent.jpg', alt: 'Lerent' },
        { link: 'https://legispro.sk/', image: '../sources/aeb-portfolio/Screenshot 2025-12-05 at 19.20.50.png', alt: 'Legispro' },
        { link: 'https://falat.sk/', image: '../sources/aeb-portfolio/stolarstvo.jpg', alt: 'Falat' },
        { link: 'https://zmrdwear.sk/', image: '../sources/aeb-portfolio/10.jpg', alt: 'Web projekt 1' },
        { link: 'https://www.tristanstudio.sk/', image: '../sources/aeb-portfolio/20.jpg', alt: 'Web projekt 2' },
        { link: 'https://campro.sk/', image: '../sources/aeb-portfolio/30.jpg', alt: 'Web projekt 3' },
        { link: 'https://www.rssp.sk/', image: '../sources/aeb-portfolio/40.jpg', alt: 'Web projekt 4' },
        { link: 'https://www.benstavbs.sk/', image: '../sources/aeb-portfolio/50.jpg', alt: 'Web projekt 5' },
        { link: 'https://www.trubela.sk/', image: '../sources/aeb-portfolio/60.jpg', alt: 'Web projekt 6' },
        { link: 'https://www.veskolfarm.sk/', image: '../sources/aeb-portfolio/70.jpg', alt: 'Web projekt 7' },
        { link: 'https://www.lemino.sk/', image: '../sources/aeb-portfolio/80.jpg', alt: 'Web projekt 8' },
        { link: 'https://www.instalatherm.sk/', image: '../sources/aeb-portfolio/100.jpg', alt: 'Web projekt 10' },
        { link: 'https://www.kreslimesivankou.sk/', image: '../sources/aeb-portfolio/110.jpg', alt: 'Web projekt 11' },
        { link: 'https://www.autocentrumbb.sk/', image: '../sources/aeb-portfolio/120.jpg', alt: 'Web projekt 12' },
        { link: 'https://www.pemavzt.sk/', image: '../sources/aeb-portfolio/130.jpg', alt: 'Web projekt 13' },
        { link: 'https://penelcom.sk/', image: '../sources/aeb-portfolio/140.jpg', alt: 'Web projekt 14' },
        { link: 'https://mlresult.sk/', image: '../sources/aeb-portfolio/150.jpg', alt: 'Web projekt 15' },
    ];

    const container = document.getElementById('infinite-grid-container');
    if (!container) return;

    // Check if mobile
    const isMobile = window.innerWidth <= 767;

    // Mobile: Simple vertical list
    if (isMobile) {
        portfolioItemsData.forEach(itemData => {
            const tile = document.createElement('div');
            tile.className = 'portfolio-item-apple';

            const link = document.createElement('a');
            link.href = itemData.link;
            link.target = '_blank';

            const img = document.createElement('img');
            img.src = itemData.image;
            img.alt = itemData.alt;

            link.appendChild(img);
            tile.appendChild(link);
            container.appendChild(tile);
        });
        return; // Exit early, don't run infinite grid logic
    }

    // Desktop: Infinite grid

    const itemWidth = 300;
    const itemHeight = itemWidth * (10 / 16);
    const gap = 100;
    const buffer = 1;

    let items = new Map();
    let gridOffset = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };
    let isDragging = false;
    let velocity = { x: 0, y: 0 };

    function getMatrixItem(items, row, col) {
        const numCols = 5; // Adjust number of columns for variety
        const totalItems = items.length;
        const index = (Math.abs(row * numCols + col)) % totalItems;
        return items[index];
    }

    function createTile(itemData, gridIndex) {
        const id = `${gridIndex.row}-${gridIndex.col}`;
        const tile = document.createElement('div');
        tile.className = 'portfolio-item-apple';
        tile.style.position = 'absolute';
        tile.style.width = `${itemWidth}px`;
        tile.style.height = `${itemHeight}px`;

        const x = gridIndex.col * (itemWidth + gap) + gridOffset.x;
        const y = gridIndex.row * (itemHeight + gap) + gridOffset.y;
        tile.style.transform = `translate(${x}px, ${y}px)`;

        const link = document.createElement('a');
        link.href = itemData.link;
        link.target = '_blank';
        const img = document.createElement('img');
        img.src = itemData.image;
        img.alt = itemData.alt;
        link.appendChild(img);
        tile.appendChild(link);
        
        container.appendChild(tile);

        return { id, gridIndex, element: tile };
    }
    
    function setupInitialTiles() {
        const { clientWidth, clientHeight } = container;
        const minRows = Math.ceil(clientHeight / (itemHeight + gap)) + buffer * 2;
        const minCols = Math.ceil(clientWidth / (itemWidth + gap)) + buffer * 2;

        const centerRow = Math.floor(minRows / 2);
        const centerCol = Math.floor(minCols / 2);
        
        gridOffset.x = -centerCol * (itemWidth + gap) + clientWidth / 2;
        gridOffset.y = -centerRow * (itemHeight + gap) + clientHeight / 2;

        for (let row = 0; row < minRows; row++) {
            for (let col = 0; col < minCols; col++) {
                const itemData = getMatrixItem(portfolioItemsData, row, col);
                const tile = createTile(itemData, { row, col });
                items.set(tile.id, tile);
            }
        }
        requestAnimationFrame(update);
    }

    function updateTiles() {
        const { clientWidth, clientHeight } = container;

        items.forEach(item => {
            const x = item.gridIndex.col * (itemWidth + gap) + gridOffset.x;
            const y = item.gridIndex.row * (itemHeight + gap) + gridOffset.y;

            const isOutside = x < -itemWidth - (buffer * (itemWidth + gap)) || x > clientWidth + (buffer * (itemWidth + gap)) ||
                              y < -itemHeight - (buffer * (itemHeight + gap)) || y > clientHeight + (buffer * (itemHeight + gap));

            if (isOutside) {
                container.removeChild(item.element);
                items.delete(item.id);
            }
        });
        
        const minRows = Math.ceil(clientHeight / (itemHeight + gap)) + buffer * 2;
        const minCols = Math.ceil(clientWidth / (itemWidth + gap)) + buffer * 2;
        const startRow = Math.floor(-gridOffset.y / (itemHeight + gap)) - buffer;
        const startCol = Math.floor(-gridOffset.x / (itemWidth + gap)) - buffer;

        for (let row = startRow; row < startRow + minRows; row++) {
            for (let col = startCol; col < startCol + minCols; col++) {
                const id = `${row}-${col}`;
                if (!items.has(id)) {
                    const itemData = getMatrixItem(portfolioItemsData, row, col);
                    const tile = createTile(itemData, { row, col });
                    items.set(id, tile);
                }
            }
        }
    }

    function onMouseDown(e) {
        isDragging = true;
        container.style.cursor = 'grabbing';
        lastMousePos.x = e.clientX;
        lastMousePos.y = e.clientY;
        velocity = { x: 0, y: 0 };
    }

    function onMouseMove(e) {
        if (!isDragging) return;
        const dx = e.clientX - lastMousePos.x;
        const dy = e.clientY - lastMousePos.y;

        gridOffset.x += dx;
        gridOffset.y += dy;

        velocity.x = dx;
        velocity.y = dy;

        lastMousePos.x = e.clientX;
        lastMousePos.y = e.clientY;
    }

    function onMouseUp() {
        isDragging = false;
        container.style.cursor = 'grab';
    }

    function update() {
        if (!isDragging) {
            gridOffset.x += velocity.x;
            gridOffset.y += velocity.y;
            velocity.x *= 0.92; // friction
            velocity.y *= 0.92; // friction
        }

        items.forEach(item => {
            const x = item.gridIndex.col * (itemWidth + gap) + gridOffset.x;
            const y = item.gridIndex.row * (itemHeight + gap) + gridOffset.y;
            item.element.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        if(isDragging || Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1){
            updateTiles();
        }

        requestAnimationFrame(update);
    }

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mouseleave', onMouseUp);
    
    setupInitialTiles();
});
