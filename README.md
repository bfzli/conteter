<div align="center">
  <a href="https://www.styled-components.com">
    <img 
        alt="styled-components" 
        height="50px"
        src="./assets/contenter.png" 
    />
  </a>
</div>

<br />

<div align="center">
  <strong>
    📖 Add creative flair to your projects with quick and easy content generation.
  </strong>
</div>

---

## What is Contenter?

Generate content for testing, previews, and other scenarios. Seamless integration in dev and prod. Import consistent, randomized content on client/server. Framework-agnostic for versatile use.

```jsx
import { 
    Name, 
    Surname, 
    Email, 
    Username,
    Title,
    Website
} from "@contenter"

const allDatas = {
    name: Name(),
    surname: Surname(),
    email: Email(),
    username: Username(),
    title: Title(),
    website: Website()
}

console.log(allDates)

// output: {
//    name: 'Ava',
//    surname: 'Campbell',
//    email: 'elizabethgarcia@example.net',
//    username: 'ava_campbell',
//    title: 'Understanding the Dynamics of International',
//    website: 'placeholderfinance.com',
// }
```

## License
Licensed under the MIT License, everyone is allowed to use the code expect for bad.

See [LICENSE](./LICENSE) for more information.