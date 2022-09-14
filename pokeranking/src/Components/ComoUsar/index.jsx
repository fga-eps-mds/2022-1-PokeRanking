import "./style.css";

function ComoUsar ({ opened, setOpened }) {

    if (!opened) return null; 

    return (
        <div id="modal-braba" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={() => setOpened(false)}>&times;</span>
           
                            
            </div>
            
            <div className="linha-vertical"></div>
    
          </div>
        </div>
      );

}

export default ComoUsar;