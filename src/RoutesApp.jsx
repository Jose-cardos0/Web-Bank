import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeApp } from "./HomeApp";
import { LoginBB } from "./pages/LoginBB";
import { ContaPessoaPF } from "./pages/ContaPessoaPF";
import { ExtratoPessoaPF } from "./pages/ExtratoPessoaPF";
import { LoginConfirm } from "./pages/LoginConfirm";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/login" element={<LoginBB />} />
        <Route path="/conta" element={<ContaPessoaPF />} />
        <Route path="/extrato" element={<ExtratoPessoaPF />} />
        <Route path="/loginconfirm" element={<LoginConfirm />} />
      </Routes>
    </BrowserRouter>
  );
}
