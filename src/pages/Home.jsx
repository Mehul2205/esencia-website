import React from 'react';

const Home = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Professional Family Health Care</h1>
            <p>Redvaxin focused on improving patients' lives.</p>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <ProductCard name="Hello World Refexo" desc="Fexofenadine HCL Tablets" />
                    <ProductCard name="Azomin 500" desc="Azithromycin Tablets IP 500 mg" />
                    <ProductCard name="Clopivax 75" desc="Clopidogrel Tablets IP 75 mg" />
                </div>
            </section>
        </div>
    );
};

const ProductCard = ({ name, desc }) => (
    <div className="border p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{desc}</p>
    </div>
);

export default Home;
