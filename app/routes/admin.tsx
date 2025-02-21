import { Outlet } from "react-router";

export default function Page() {
    return (
        <>
            <header>/admin - root</header>
            <div style={{ padding: 12 }}>
                <hr />
                <Outlet />
                <hr />
            </div>
        </>
    )
}
