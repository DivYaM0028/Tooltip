import React from 'react';
import ReactTooltip from 'react-tooltip';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "top",
      condition: false
    };
  }
  changePlace(place) {
    this.setState({
      place: place
    });
  }

  onClick() {
    this.setState({
      condition: true
    });
  }
  render() {
    const { place } = this.state;
    return (
      <div>
        <section className="tooltip">
          <div className="Hover">
            <a
              data-for="main"
              data-tip="Hello Tooltip"
              data-iscapture="true"
            >Hover 
            </a>
          </div>
          <div className="direction">
            <div className="buttons">
              <div className="item">
                <a
                  className={place === "top" ? "active" : ""}
                  onClick={this.changePlace.bind(this, "top")}
                >
                  &#8593; Top
                </a>
                
                <a
                  className={place === "bottom" ? "active" : ""}
                  onClick={this.changePlace.bind(this, "bottom")}
                >
                  &#8595; Bottom
                </a>
                <a
                  className={place === "right" ? "active" : ""}
                  onClick={this.changePlace.bind(this, "right")}
                >
                  &#8594; Right
                </a>
                <a
                  className={place === "left" ? "active" : ""}
                  onClick={this.changePlace.bind(this, "left")}
                >
                  &#8592; Left
                </a>
              </div>
            </div>
          </div>
          <ReactTooltip
            id="main"
            place={place}
            multiline={true}
          />
        </section>
      </div>
    );
  }
}
export default App;