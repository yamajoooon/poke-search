import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const About = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about/example2">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href = "/main/search">
        <a style={linkStyle}>List</a>
        </Link>
    </div>
)

export default About