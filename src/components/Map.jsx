import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";
import { divIcon } from "leaflet";
import "esri-leaflet";

const staticPersonData = [
   // { name: "1", coordinates: [40.7128, -74.0060], address: "123 Main St, New York, NY" },
    // { name: "2", coordinates: [34.0522, -118.2437], address: "456 Elm St, Los Angeles, CA" },
    { name: "3", coordinates: [51.5074, -0.1278], address: "789 Maple St, London, UK" },
    // { name: "4", coordinates: [35.6895, 139.6917], address: "101 Pine St, Tokyo, Japan" }
  ];

const Map = () => {
  const [personData, setPersonData] = useState([]);

  useEffect(() => {
    setPersonData(staticPersonData);
  }, []);

  const createCustomIcon = () => {
    return divIcon({
      html: renderToStaticMarkup(
        <FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }} />
      ),
      className: "",
      iconSize: [24, 24],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24],
    });
  };

  return (
    <Row>
      <Col className="mb-5">
        <Card
          style={{
            height: "300px",
            background: "linear-gradient(to right, #101727 0%, #101727 100%)",
            color: "#fff",
            padding: 0,
            boxShadow: "0 0 3px rgba(255, 255, 255, 0.5)",
          }}
        >
          <MapContainer
            center={[42.3207845, 43.3713615]}
            zoom={2}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <DynamicView personData={personData} />
            {personData.map((person, idx) => (
              <Marker
                key={idx}
                position={person.coordinates}
                icon={createCustomIcon()}
              >
                <Popup>
                  <strong>{person.name}</strong><br />
                  {person.address}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Card>
      </Col>
    </Row>
  );
};

const DynamicView = ({ personData }) => {
  const map = useMap();

  useEffect(() => {
    if (personData.length > 0) {
      const firstLocation = personData[0].coordinates;
      map.setView(firstLocation, 14);
    }
  }, [personData, map]);

  return null;
};

export default Map;
