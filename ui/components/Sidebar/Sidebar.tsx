async function Sidebar() {
  try {
    const res = await fetch("http://localhost:3000/api/board");

    if (!res.ok) {
      await Promise.reject(res.statusText);
    }

    const boards: string[] = await res.json();

    return (
      <ul>
        {boards.map((board) => (
          <li key={board}>{board}</li>
        ))}
      </ul>
    );
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default Sidebar;
