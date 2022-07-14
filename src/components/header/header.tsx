import logo from '../../logo.png';
import './header.css';

export function Header({children}: {children:JSX.Element}) {
    return (
        <header>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="contain-overload">
                yourRecipesBook
                    <span>V</span>
                    <span>E</span>
                    <span>G</span>
                    <span>G</span>
                    <span>I</span>
                    <span>E</span>
                </h1>
            </div>
                {children}
        </header>
    )
}