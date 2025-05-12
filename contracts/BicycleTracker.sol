// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BicycleTracker {
    struct Bicycle {
        uint id;
        address owner;
        string status;
        string latitude;
        string longitude;
        uint timestamp;
    }

    mapping(uint => Bicycle) public bicycles;
    uint public nextId;

    function registerBicycle(string memory status, string memory lat, string memory lon) public {
        bicycles[nextId] = Bicycle(nextId, msg.sender, status, lat, lon, block.timestamp);
        nextId++;
    }

    function updateLocation(uint id, string memory lat, string memory lon) public {
        require(bicycles[id].owner == msg.sender, "Not owner");
        bicycles[id].latitude = lat;
        bicycles[id].longitude = lon;
        bicycles[id].timestamp = block.timestamp;
    }

    function getBicycle(uint id) public view returns (Bicycle memory) {
        return bicycles[id];
    }
}
