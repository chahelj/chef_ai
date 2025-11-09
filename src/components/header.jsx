import logoIcon from '../assets/chef_ai_icon.png';

export default function Header(){
    return(
        <div className="Header">
            <img src={logoIcon} className="Header--icon" alt="Chef AI logo" />
            <span className="Header--text">Chef AI</span>
        </div>
    )
}