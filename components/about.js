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
    </div>
)

export default About