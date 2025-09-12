import axios from "axios";

export default function RestaurantDetail({ restaurant }) {
  return (
    <main style={{ padding: 20 }}>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>Cuisine: {restaurant.cuisine?.join(", ")}</p>
      <p>Rating: {restaurant.averageRating?.toFixed(1) || "–"}</p>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await axios.get(`http://localhost:4000/restaurants/${params.id}`);
  return { props: { restaurant: data } };
}