import React from 'react';
import ProductList from './components/ProductList';
import BarcodeScanner from './components/BarcodeScanner';

const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <h1>SUPER₹KICKS</h1>
            </header>
            <main>
                <ProductList />
                <BarcodeScanner />
            </main>
            <script>
    const header = document.querySelector('h1');
    header.style.textAlign = 'center';
</script>
        </div>
    );
};

export default App;