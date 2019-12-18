import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import ArrayArea from "./containers/ArrayArea/ArrayArea";

function App() {
  return (
    <div>
      <Layout>
        <ArrayArea />
      </Layout>
    </div>
  );
}

export default App;
