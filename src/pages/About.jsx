// Home.js


import TestComponent from "../components/TestComponent.jsx";

const About = () => {
    return (

        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to My Website!</h1>
            <p className="text-gray-700">
                This is a simple home component. Customize it according to your needs.
            </p>
            <TestComponent />
        </div>
    );
};

export default About;
