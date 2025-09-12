import axios from "axios";
import Link from "next/link";

export default function Home({ restaurants }) {
  return (
    <main style={{ padding: 20 }}>
      <h1>Local Restaurant Explorer</h1>
      <ul>
        {restaurants.map(r => (
          <li key={r._id}>
            <Link href={`/restaurant/${r._id}`}>
              {r.name} — {r.cuisine?.join(", ")} — ⭐ {r.averageRating?.toFixed(1) || "–"}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:4000/restaurants");
  return { props: { restaurants: data } };
}