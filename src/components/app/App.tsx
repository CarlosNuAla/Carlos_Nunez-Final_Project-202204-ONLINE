import { menuOptionsType } from '../../interfaces/menuoptions';
import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { Recipes } from '../../pages/recipes';
import { Layout } from '../layout/layout';
import Searcher from '../../pages/searcher';
import { Home } from '../../pages/home';
import About from '../../pages/about';


export function App() {

  const menuOptions: menuOptionsType = [
    { path: 'index', label: 'Home' },
    { path: 'searcher', label: 'Searcher' },
    { path: 'recipes', label: 'Recipes' },
    { path: 'about', label: 'About' },
];

  return (
    <Layout
        menuOptions={menuOptions}
            >
                <Routes>
                    <Route
                        path=""
                        element={

                                <Home />

                        }
                    ></Route>
                    <Route
                        path="searcher"
                        element={

                                <Searcher />

                        }
                    ></Route>
                    <Route
                        path="recipes"
                        element={

                                <Recipes />

                        }
                    ></Route>
                    <Route
                        path="about"
                        element={

                                <About />

                        }
                    ></Route>
                    <Route
                        path="*"
                        element={<Navigate replace to="" />}
                    ></Route>
                </Routes>
            </Layout>
  );
}