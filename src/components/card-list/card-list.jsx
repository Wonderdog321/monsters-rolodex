import CardContainer from "../card-container/card-container";
import "./card-list.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardContainer monster={monster} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <CardContainer monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
