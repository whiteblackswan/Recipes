import { useTheme } from "../hooks/useTheme"

// styles
import './ThemeSelector.css'

const themeColors = ['#16633d', '#544e32', '#631616']

export default function ThemeSelector() {
  const { changeColor } = useTheme()


  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div 
            key={color} 
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}