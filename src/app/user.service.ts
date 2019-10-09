import {Observable, of} from "rxjs";
import {User} from "./models/user";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private dummyUsers: User[] = [
    {
      id: 1,
      name: "user 1",
      cardNumber: "1",
      cardType: "simple"
    },
    {
      id: 2,
      name: "user 2",
      cardNumber: "2",
      cardType: "simple"
    },
    {
      id: 3,
      name: "user 3",
      cardNumber: "3",
      cardType: "simple"
    },
    {
      id: 4,
      name: "user 4",
      cardNumber: "4",
      cardType: "simple"
    }
  ];

  getUsers(): Observable<User[]> {
    return of(this.dummyUsers);
  }

}
