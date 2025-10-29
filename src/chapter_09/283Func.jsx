import {useState} from "react";
import ReactDOM from 'react-dom/client';

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
  
function Page(props) {
  const [showWarning, setShowWarning] = useState(false);
  
  const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
  }

  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}
  
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Page />);