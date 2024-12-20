import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";

export default function ProfilePage() {
  return (
    <div>
      <Card>
        <CardBody className="relative px-6 py-4">
          <div className="text-xl">Profile Details</div>
        </CardBody>
      </Card>
    </div>
  );
}
