import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>Hey, this is about page</h1>
        <p>This is a react app for leaving comments about thye product</p>
        <p>Version 1.0.0</p>

        <p>
          <Link to="/">Back to main page</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
