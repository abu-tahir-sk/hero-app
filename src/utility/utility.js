const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("apps");
  if (storedAppSTR) {
    const StoredAppData = JSON.parse(storedAppSTR);
    return StoredAppData;
  } else {
    return [];
  }
};

const AddToStoredApp = (id) => {
  const storedAppData = getStoredApp();
  if (storedAppData.includes(id)) {
    alert("Already added to the list");
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("apps", data);
  }
};

export { getStoredApp, AddToStoredApp };
