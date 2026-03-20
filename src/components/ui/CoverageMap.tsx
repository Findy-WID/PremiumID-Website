import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function CoverageMap() {
  const position: [number, number] = [15.0, 30.0];

  const markers: { pos: [number, number]; name: string }[] = [
    // Africa
    { pos: [6.5244,   3.3792],  name: "Lagos, Nigeria"          },
    { pos: [-1.2921,  36.8219], name: "Nairobi, Kenya"           },
    { pos: [30.0444,  31.2357], name: "Cairo, Egypt"             },
    { pos: [5.6037,   -0.1870], name: "Accra, Ghana"             },
    { pos: [-26.2041, 28.0473], name: "Johannesburg, South Africa" },
    { pos: [8.9806,   38.7578], name: "Addis Ababa, Ethiopia"    },
    { pos: [33.5731,  -7.5898], name: "Casablanca, Morocco"      },
    { pos: [14.7167,  -17.4677],name: "Dakar, Senegal"           },
    { pos: [5.3600,   -4.0083], name: "Abidjan, Côte d'Ivoire"   },
    { pos: [-6.7924,  39.2083], name: "Dar es Salaam, Tanzania"  },
    { pos: [-8.8368,  13.2343], name: "Luanda, Angola"           },
    { pos: [-1.9441,  30.0619], name: "Kigali, Rwanda"           },
    { pos: [12.6392,  -8.0029], name: "Bamako, Mali"             },
    { pos: [9.0579,   7.4951],  name: "Abuja, Nigeria"           },
    { pos: [-15.4167, 28.2833], name: "Lusaka, Zambia"           },
    { pos: [36.8219,  10.1658], name: "Tunis, Tunisia"           },
    { pos: [3.8480,   11.5021], name: "Yaoundé, Cameroon"        },
    { pos: [-25.7479, 28.2293], name: "Pretoria, South Africa"   },
    
    // Middle East
    { pos: [25.2048,  55.2708], name: "Dubai, UAE"               },
    { pos: [24.4539,  54.3773], name: "Abu Dhabi, UAE"           },
    { pos: [24.7136,  46.6753], name: "Riyadh, Saudi Arabia"     },
    { pos: [21.4858,  39.1925], name: "Jeddah, Saudi Arabia"     },
    { pos: [25.2854,  51.5310], name: "Doha, Qatar"              },
    { pos: [29.3759,  47.9774], name: "Kuwait City, Kuwait"      },
    { pos: [31.9454,  35.9284], name: "Amman, Jordan"            },
    { pos: [23.5880,  58.3829], name: "Muscat, Oman"             },
    { pos: [26.2235,  50.5876], name: "Manama, Bahrain"          },
    { pos: [33.8869,  35.5131], name: "Beirut, Lebanon"          },
  ];

  return (
    <div className="h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl">
      <MapContainer 
        center={position} 
        zoom={3} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%', background: '#e8f4f8' }}
      >
        {/* LIGHTER map tiles - Positron style */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
        />

        {markers.map((marker, idx) => (
          <CircleMarker
            key={idx}
            center={marker.pos}
            pathOptions={{
              color: '#ffffff',
              fillColor: '#06b6d4',
              fillOpacity: 0.95,
              weight: 2.5,
            }}
            radius={8}
          >
            <Popup>{marker.name}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}