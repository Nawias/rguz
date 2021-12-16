import React from 'react';

const Color = ({color, title, desc}) => (<div className="Color" color-title={title} desc={desc} style={{backgroundColor: color ? color : 'black'}}/>);

const Colors = (props) => {
  return (
    <div className="Colors">
      <h2>Kolory naszej floty</h2>
      <Color color={'#961b1b'} title="Purpura Królów" desc="Jakość oferowanych przez nas usług przekracza nawet najwyższe, królewskie standardy." />
      <Color color={'#28282a'} title="Czerń Asfaltu" desc="Asfalt powinien leżeć na drodze, żeby było po czym jeździć." />
      <Color color={'#ce9027'} title="Złoto Zwycięzców" desc="Nasza firma zebrała wiele nagród dla przedsiębiorstw - tak kiedyś chciałbym móc powiedzieć." />
    </div>
  );
}
export default Colors;