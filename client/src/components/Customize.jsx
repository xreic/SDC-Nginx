import React from 'react';

// prettier-ignore
export default function Customize({ display }) {
  const titles = [ 'NIKE BY YOU NEW RELEASES', 'BASKETBALL BY YOU', 'BLAZER BY YOU' ];
  const men = [ 'Basketball', 'Lifestyle', 'Running', 'Football', 'Training & Gym', 'Soccer', 'Baseball', 'Skateboarding' ];
  const women = [ 'Lifestyle', 'Running', 'Training & Gym', 'Basketball', 'Soccer', 'Softball', 'Skateboarding' ];
  const kids = ['Boys', 'Girls'];

  if (display === 'customize') {
    return (
      <div className="flyout">
        <div className="empty-site-nav"></div>
        <div className="left-wing">
          {titles.map((title) => (
            <div className="bold-title">{title}</div>
          ))}
        </div>
        <div className="border-div"> </div>
        <div className="center-wing">
          <div className="bold-title">MENS</div>
          {men.map((title) => (
            <div className="center-wing-title">{title}</div>
          ))}
        </div>
        <div className="center-wing">
          <div className="bold-title">WOMENS</div>
          {women.map((title) => (
            <div className="center-wing-title">{title}</div>
          ))}
        </div>
        <div className="right-wing">
          <div className="bold-title">AIR MAX BY YOU</div>
          <div className="bold-title">NIKE BY YOU KIDS</div>
          {kids.map((title) => (
            <div className="right-wing-title">{title}</div>
          ))}
        </div>
        <div className="empty-site-nav"></div>
      </div>
    );
  } else {
    return null;
  }
}
