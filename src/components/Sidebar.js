import React, { useState } from 'react';
import '../components/Sidebar.css';

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState('70px');

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setSidebarWidth(isMenuOpen ? '180px' : '70px');
  };

  return (
    <div className="sidebar" style={{ width: sidebarWidth }}>
      
      <div className='menu-link' style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#">
          <button onClick={handleMenuClick}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                <path d="M146-278v-22h668v22H146Zm0-191v-22h668v22H146Zm0-191v-22h668v22H146Z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                <path d="m254-238-16-16 226-226-226-226 16-16 226 226 226-226 16 16-226 226 226 226-16 16-226-226-226 226Z"/>
              </svg>
            )}
          </button>
        </a>
      </div>

      <div className='menu-link' style={{ display: 'flex', alignItems: 'center' }}>
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
            <path d="M236-196h162v-236h164v236h162v-366L480-747.333 236-562.222V-196Zm-24 24v-402l268-203 268 203v402H538v-236H422v236H212Zm268-299.667Z" />
          </svg>
          <p style={{ display: isMenuOpen ? 'none' : 'block' }}>HOME</p>
        </a>
      </div>

      <div className='menu-link' style={{ display: 'flex', alignItems: 'center' }}>
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
            <path d="M480-512q-44.55 0-75.275-30.725Q374-573.45 374-618.333q0-44.884 30.725-75.275Q435.45-724 480-724q44.55 0 75.275 30.392Q586-663.217 586-618.333q0 44.883-30.725 75.608T480-512ZM212-232v-48.667q0-22.666 13.833-41.833 13.834-19.167 36.834-30.167Q319-378 373.146-391t106.833-13q52.688 0 106.854 13Q641-378 696.984-352.401q23.46 10.806 37.238 29.937Q748-303.333 748-280.667V-232H212Zm24-24h488v-24.667q0-14.666-10.167-28.166-10.166-13.5-28.5-23.167-50-24.333-101.353-36.167Q532.627-380 480-380q-52.626 0-104.313 11.833Q324-356.333 274.667-332q-18.334 9.667-28.5 23.167Q236-295.333 236-280.667V-256Zm244-280q34.333 0 58.167-23.833Q562-583.667 562-618t-23.833-58.167Q514.333-700 480-700t-58.167 23.833Q398-652.333 398-618t23.833 58.167Q445.667-536 480-536Zm0-82Zm0 362Z"/>
          </svg>
          <p style={{ display: isMenuOpen ? 'none' : 'block' }}>ABOUT</p>
        </a>
      </div>

      <div className='menu-link' style={{ display: 'flex' }}>
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
            <path d="M188-172q-23.85 0-39.925-16.075Q132-204.15 132-228v-384q0-23.85 16.075-39.925Q164.15-668 188-668h184v-52q0-23.85 16.075-39.925Q404.15-776 428-776h104q23.85 0 39.925 16.075Q588-743.85 588-720v52h184q23.85 0 39.925 16.075Q828-635.85 828-612v384q0 23.85-16.075 39.925Q795.85-172 772-172H188Zm0-24h584q12 0 22-10t10-22v-384q0-12-10-22t-22-10H188q-12 0-22 10t-10 22v384q0 12 10 22t22 10Zm208-472h168v-52q0-12-10-22t-22-10H428q-12 0-22 10t-10 22v52ZM156-196v-448 448Z"/>
          </svg>
          <p style={{ display: isMenuOpen ? 'none' : 'block' }}>WORK</p>
        </a>
      </div>

      <div className='menu-link' style={{ display: 'flex', alignItems: 'center' }}>
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
            <path d="M570.667-510.667H828V-688H570.667v177.333ZM699.333-552l-98.666-70v-34l98.666 70L798-656v34l-98.667 70ZM108-192q-23.85 0-39.925-16.075Q52-224.15 52-248v-464q0-23.85 16.075-39.925Q84.15-768 108-768h744q23.85 0 39.925 16.075Q908-735.85 908-712v464q0 23.85-16.075 39.925Q875.85-192 852-192H108Zm461.333-24H852q12 0 22-10t10-22v-464q0-12-10-22t-22-10H108q-12 0-22 10t-10 22v464q0 12 10 22t22 10h30.667q42.666-46.667 97.319-76.333Q290.638-322 354-322q62.666 0 117.666 29.667 55 29.666 97.667 76.333ZM354-388q39 0 66.5-27.5T448-482q0-39-27.5-66.5T354-576q-39.667 0-66.834 27.5Q260-521 260-482t27.166 66.5Q314.333-388 354-388ZM174-216h359.333q-34.737-38.85-81.407-60.425Q405.256-298 353.795-298q-51.462 0-98.163 21.617Q208.932-254.767 174-216Zm180.023-196q-28.69 0-49.357-20.643Q284-453.286 284-481.977q0-28.69 20.643-49.356Q325.286-552 353.976-552q28.691 0 49.357 20.643Q424-510.714 424-482.023q0 28.69-20.643 49.356Q382.713-412 354.023-412ZM480-480Z"/></svg>
          <p style={{ display: isMenuOpen ? 'none' : 'block' }}>CONTACT</p>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
