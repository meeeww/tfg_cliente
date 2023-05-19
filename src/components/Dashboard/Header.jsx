const headerOptions = [
    { name: 'home', href: '/', icon: "fa-solid fa-house" },
    { name: 'logout', href: '../signout', icon: "fa-solid fa-right-from-bracket" },
]

const Header = () => {
    return (
        <div className="sessionDashboard">
            {headerOptions.map((item) => (
                <a key={item.name} href={item.href}><i className={item.icon}></i></a>
            ))}
        </div>
    );
}

export default Header;