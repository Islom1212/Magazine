import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

export function PublicRoute({ children }: Props) {
  const isAuth = localStorage.getItem("isAuth") === "true";

  if (isAuth) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
