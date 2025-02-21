import {Outlet} from 'react-router'

export default function Page() {
    return (
        <div>
            <header>/account - root</header>
            <div style={{padding: 12}}>
                <hr/>
                <Outlet/>
                <hr/>
            </div>
        </div>
    )
}
