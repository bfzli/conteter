import type { GlobalContenterTargets } from '../ts/Types';
import { Name } from './Name';
import { Surname } from './Surname';
import { Email } from './Email';
import { Website } from './Website';
import { Title } from './Title';
import { Username } from './Username';

const Contenter = (target: GlobalContenterTargets) => {
    const modifiedTarget = target.toLocaleLowerCase();
    let toRespond = "INVALID_TARGET";

    switch(modifiedTarget) {
        case "name": toRespond = Name(); break;
        case "surname": toRespond = Surname(); break;
        case "email": toRespond = Email(); break;
        case "website": toRespond = Website(); break;
        case "title": toRespond = Title(); break;
        case "username": toRespond = Username(); break;
    }

    return toRespond;
}

export default Contenter;