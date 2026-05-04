import Swal from "sweetalert2";

const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("apps");
  if (storedAppSTR) {
    const StoredAppData = JSON.parse(storedAppSTR);
    return StoredAppData;
  } else {
    return [];
  }
};

const removeFromStoredApp = (id) => {
  const storedApps = JSON.parse(localStorage.getItem("apps")) || [];
  const updatedApps = storedApps.filter(appId => parseInt(appId) !== id);
  localStorage.setItem("apps", JSON.stringify(updatedApps));
};

const AddToStoredApp = (id,title) => {
  const storedAppData = getStoredApp();

 
  if (storedAppData.includes(id)) {
    alert("Already added to the list");
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("apps", data);
    Swal.fire({
  title: title,
  text: "App Installed Successfully",
  icon: "success",
  draggable: true
});
  
  }
};

export { getStoredApp, AddToStoredApp, removeFromStoredApp };
