import "./HeaderMenu.css"

const HeaderMenu = () => {
  return (
    <div className="headerMenu">
        <ul>
            <li>Hem</li>
            <li>Tjänster</li>
            <li>Ventilationsfirmor</li>
            <li>Rotavdrag</li>

        </ul>
        <button>Lägg till företag</button>
    </div>
  )
}

export default HeaderMenu