import React, { useState } from "react";
import {
  ModalAnimation,
  Container,
  Background,
  LocationModal,
  Search,
  SearchResults,
  SearchResult,
} from "./styles/ModalLocation";

const ModalLocation = ({ setShowModal, showModal }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ModalAnimation>
      <Container className={showModal ? "open" : "closed"}>
        <Background onClick={() => setShowModal(false)} />
        <LocationModal>
          <Search>
            <div className="icon" onClick={() => setShowModal(false)}>
              <i className="material-icons">clear</i>
            </div>
            <h3>Cek makanan yang tersedia di lokasi kamu!</h3>
            <i className="material-icons searchLocationIcon">location_on</i>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Location..."
            ></input>
            {searchQuery.length > 3 ? (
              <SearchResults>
                <SearchResult>
                  <i className="material-icons resultIcon">location_on</i>
                  <div className="locationResult">
                    <h3>Kulina</h3>
                    <p>Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...</p>
                  </div>
                </SearchResult>
                <SearchResult>
                  <i className="material-icons resultIcon">location_on</i>
                  <div className="locationResult">
                    <h3>Pancoran Riverside Apartment</h3>
                    <p>RT.6/RW.1,Pengadegan,Pancoran,South Jakart...</p>
                  </div>
                </SearchResult>
                <SearchResult>
                  <i className="material-icons resultIcon">location_on</i>
                  <div className="locationResult">
                    <h3>Jalan Tulodong Atas 28</h3>
                    <p>Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...</p>
                  </div>
                </SearchResult>
                <SearchResult>
                  <i className="material-icons resultIcon">location_on</i>
                  <div className="locationResult">
                    <h3>Block71 Jakarta</h3>
                    <p>Ariobimo Sentral, South Jakarta, RT.9/RW.4, Eas...</p>
                  </div>
                </SearchResult>
              </SearchResults>
            ) : null}
          </Search>
        </LocationModal>
      </Container>
    </ModalAnimation>
  );
};

export default ModalLocation;
