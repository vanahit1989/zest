import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// eslint-disable-next-line import/default
import { ComponentForTest } from 'src/ComponentForTest';

export const Home = () => {
    return (
        <Routes>
            <Route path="/home" element={<div> HOME</div>} />{' '}
            <Route path="/test" element={<ComponentForTest />} />{' '}
        </Routes>
    );
};
