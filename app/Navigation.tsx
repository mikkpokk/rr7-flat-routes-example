import {Link} from 'react-router'

export function Navigation() {
    return (
        <ul style={{display: 'flex', gap: 25, margin: '15px 0'}}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/account">Account</Link>
            </li>
            <li>
                <Link to="/account/demo">Account / Demo</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
            <li>
                <Link to="/admin/demo">Admin / Demo</Link>
            </li>
        </ul>
    )
}
