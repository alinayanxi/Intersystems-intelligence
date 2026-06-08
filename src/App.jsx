import logo from "./assets/InterSystems_logo_(2016).svg.png"
const brand = {
  navy: "#0B1F53",
  deep: "#071827",
  blue: "#143C8C",
  cyan: "#00A3E0",
  teal: "#00A79D",
  light: "#F6F8FB",
  soft: "#EAF2F8",
  border: "#D8E6F0",
  text: "#334155",
  muted: "#64748B"
  
}
const type = {

hero:
"clamp(58px,6vw,92px)",

section:
"clamp(34px,3vw,48px)",

cardTitle:
"28px",

body:
"18px",

small:
"13px",

caption:
"12px",

line:
"1.5"

}
const products = [
  {
    layer: "Core data platform",
    name: "InterSystems IRIS",
    description:
      "High-performance data platform supporting mission-critical applications across healthcare, financial services, and other data-intensive industries."
  },
  {
    layer: "Healthcare data platform",
    name: "IRIS for Health",
    description:
      "Healthcare-specific data platform designed for interoperability, healthcare standards, and FHIR-based data management."
  },
  {
    layer: "Integration engine",
    name: "HealthShare Health Connect",
    description:
      "Healthcare integration layer enabling data exchange and transformation across modern and legacy systems."
  },
  {
    layer: "Cloud delivery model",
    name: "Health Connect Cloud",
    description:
      "Managed cloud-based integration service designed to reduce infrastructure ownership and maintenance burden."
  },
  {
    layer: "Connected care",
    name: "HealthShare Unified Care Record",
    description:
      "Longitudinal patient record and health information exchange capability for connected care use cases."
  },
  {
    layer: "Clinical application",
    name: "TrakCare / IntelliCare",
    description:
      "International EHR and next-generation AI-enabled healthcare information system."
  }
]

const signals = [
{
year:"2023",
signal:"Financial resilience under healthcare cost pressure",
evidence:"Revenue stability and recurring revenue remained central.",
implication:"Growth requires stronger value creation."
},

{
year:"2024",
signal:"Managed services and AI became priorities",
evidence:"Cloud delivery and AI investments accelerated.",
implication:"Shift toward managed infrastructure."
},

{
year:"2025",
signal:"HealthShare and AI products gained momentum",
evidence:"Healthcare product evolution became more visible.",
implication:"Growth depends on scalable delivery."
}
]
const cloudValue = [
[
"Problem",
"Hospitals face integration complexity, cost pressure, and legacy system burden."
],

[
"Capability",
"Health Connect Cloud provides a managed healthcare integration layer."
],

[
"Value",
"Reduces infrastructure maintenance and supports faster interoperability delivery."
],

[
"Strategic meaning",
"Signals a shift from customer-managed software to cloud-managed healthcare infrastructure."
]
]
const competitors = [

{
name:"InterSystems",
x:"High",
y:"Medium"
},

{
name:"Epic",
x:"Very High",
y:"Low"
},

{
name:"Oracle Health",
x:"High",
y:"High"
},

{
name:"Google Cloud",
x:"Medium",
y:"Very High"
},

{
name:"Snowflake",
x:"Low",
y:"Very High"
},

{
name:"Databricks",
x:"Low",
y:"High"
}

]
const timeline = [
  {
    year: "2023",
    title: "Stability under pressure",
    text: "Healthcare cost pressure slowed new spending, while recurring revenue remained a strategic strength."
  },
  {
    year: "2024",
    title: "Managed services acceleration",
    text: "Cloud-managed delivery and generative AI became more visible strategic priorities."
  },
  {
    year: "2025",
    title: "AI-enabled healthcare products",
    text: "IntelliCare and HealthShare AI capabilities suggest product evolution toward AI-enabled workflows."
  },
  {
    year: "2026",
    title: "Hypothesis: healthcare operating infrastructure",
    text: "InterSystems may increasingly position itself as managed healthcare data and interoperability infrastructure."
  }
]
const operatingModel=[

{
stage:"Market sensing",

question:"Where is healthcare demand moving?",

output:"Signal detection",

value:
"Track cloud migration, AI investment, interoperability mandates, healthcare budget pressure and enterprise buying behaviour.",

impact:
"Prioritize markets and identify early growth vectors."
},

{
stage:"Competitive intelligence",

question:"Who is changing faster?",

output:"Competitive tracking",

value:
"Monitor Epic, Oracle Health, hyperscalers and adjacent data players through launches, partnerships and hiring activity.",

impact:
"Understand where InterSystems retains structural advantage."
},

{
stage:"Strategic synthesis",

question:"What does it mean for InterSystems?",

output:"Executive narrative",

value:
"Convert fragmented observations into hypotheses around product positioning, monetization and go-to-market.",

impact:
"Support leadership decision-making."
},

{
stage:"Commercial activation",

question:"What should happen next?",

output:"Action framework",

value:
"Translate intelligence into campaign priorities, customer messaging and market expansion actions.",

impact:
"Increase strategic execution speed."
}

]
export default function App() {
  return (
    <main
style={{
minHeight:"100vh",
background:brand.light,
color:brand.deep,
fontFamily:"Arial, sans-serif"
}}
>
<header
style={{
position:"sticky",
top:"0",
zIndex:999,
height:"76px",
background:"rgba(255,255,255,.96)",
borderBottom:"1px solid #dbe7f3",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"0 56px"
}}
>

<div
style={{
display:"flex",
alignItems:"center",
gap:"18px"
}}
>

<img
src={logo}
alt="InterSystems"
style={{
height:"34px",
width:"auto",
objectFit:"contain"
}}
/>

<div>

<div
style={{
fontSize:"11px",
letterSpacing:"2px",
color:"#6b7280",
textTransform:"uppercase"
}}
>
Strategic Intelligence
</div>

<div
style={{
fontSize:"18px",
fontWeight:"600",
color:"#071827"
}}
>
InterSystems Brief
</div>

</div>

</div>

<div style={{
display:"flex",
gap:"24px",
alignItems:"center",
fontSize:type.small,
textTransform:"uppercase",
letterSpacing:"1px"
}}>
<span>Overview</span>
<span>Signals</span>
<span>Matrix</span>
<span>Timeline</span>
<span style={{color:"#143c8c", fontWeight:"700"}}>
Alina Chen
</span>
</div>

</header>
      <section style={{
        padding: "90px 9vw",
        borderBottom: "1px solid #ddd"
      }}>
        <p style={{
          fontSize: "13px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#666",
          marginBottom: "60px"
        }}>
         InterSystems Strategic Intelligence Brief
        </p>

        <h1 style={{
          fontSize:type.hero,

fontWeight:"300",

lineHeight:"0.95",

letterSpacing:"-0.04em",

maxWidth:"1200px",
fontFamily:
"Inter, Arial, sans-serif"
       
        }}>
          Understanding
InterSystems Through
Strategic Intelligence
        </h1>

        <p style={{
          marginTop: "40px",
          fontSize: "22px",
          lineHeight: "1.5",
          color: "#555",
          maxWidth: "720px"
        }}>
          Product direction, competitive positioning, and market evolution across healthcare data infrastructure.
<div
style={{
marginTop:"90px",
display:"grid",
gridTemplateColumns:"160px 160px 1fr",
gap:"40px",
fontSize:"14px",
borderTop:"1px solid #d8d2c7",
paddingTop:"28px",
maxWidth:"760px"
}}
>

<div>
<div style={{color:"#777", marginBottom:"8px"}}>
Prepared by
</div>
Alina Chen
</div>

<div>
<div style={{color:"#777", marginBottom:"8px"}}>
Date
</div>
June 2026
</div>

<div>
<div style={{color:"#777", marginBottom:"8px"}}>
Format
</div>
Candidate-prepared intelligence microsite
</div>

</div>
        </p>
      </section>

      <section id="overview" style={{
        padding: "50px 9vw",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px"
      }}>
        {[
          ["Core platform", "IRIS"],
          ["Healthcare layer", "IRIS for Health"],
          ["Strategic shift", "Health Connect Cloud"]
        ].map(([label, value]) => (
          <div key={label} style={{
            background: "#fff",
            color:"#ffffff",
            padding: "28px",
            border: "1px solid #e5e0d6"
          }}>
            <p style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#777"
            }}>
              {label}
            </p>
            <h2 style={{
              fontSize: "28px",
              fontWeight: "500",
              marginTop: "24px"
            }}>
              {value}
            </h2>
          </div>
        ))}
      </section>

      <section id="products" style={{
        padding: "90px 9vw",
        background: "#ffffff"
      }}>
        <p style={{
          fontSize: "13px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#777"
        }}>
          Product architecture
        </p>

        <h2 style={{
          fontSize: "48px",
          fontWeight: "400",
          maxWidth: "850px",
          lineHeight: "1.1",
          fontFamily: "Georgia, 'Times New Roman', serif"
        }}>
          InterSystems appears to operate across the full healthcare data value chain.
        </h2>

        <div style={{
          marginTop: "50px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px"
        }}>
          {products.map((product, index) => (
            <div key={product.name} style={{
              display: "grid",
              gridTemplateColumns: "90px 260px 1fr",
              gap: "24px",
              alignItems: "start",
              padding: "24px",
              border: "1px solid #e8e3d8",
              background: index % 2 === 0 ? "#EAF2F8" : "#ffffff"
            }}>
              <div style={{
                fontSize: "12px",
                letterSpacing: "2px",
                color: "#999"
              }}>
                0{index + 1}
              </div>

              <div>
                <p style={{
                  margin: 0,
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#777"
                }}>
                  {product.layer}
                </p>
                <h3 style={{
                  margin: "12px 0 0",
                  fontSize: "24px",
                  fontWeight: "500"
                }}>
                  {product.name}
                </h3>
              </div>

              <p style={{
                margin: 0,
                fontSize: "17px",
                lineHeight: "1.6",
                color: "#555"
              }}>
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="signals"
section
style={{
padding:"110px 9vw",
background:brand.light
}}
>

<p
style={{
fontSize:"13px",
letterSpacing:"3px",
textTransform:"uppercase",
color:"#777"
}}
>
Strategic Signals
</p>

<h2
style={{
fontSize:"48px",
fontWeight:"400",
maxWidth:"850px",
color:brand.navy,
lineHeight:"1.1"
}}
>
Three years of signals suggest a strategic shift.
</h2>

<div
style={{
marginTop:"60px",
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"24px"
}}
>

{
signals.map((item)=>(

<div
key={item.year}
style={{
background:"#ffffff",
padding:"32px",
border:"1px solid rgba(255,255,255,.08)",
}}
>

<h1>
{item.year}
</h1>

<h3>
{item.signal}
</h3>

<p>
{item.evidence}
</p>

<p>
{item.implication}
</p>

</div>

))
}

</div>

</section>
<section id="positioning"
  style={{
    padding: "90px 9vw",
    background:"#071827",
    color: "#fff"
  }}
>
  <p
    style={{
      fontSize: "13px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "#aaa"
    }}
  >
    Product deep dive
  </p>

  <h2
style={{
fontSize:
"clamp(52px,5vw,72px)",

fontWeight:"300",

lineHeight:"1.03",

letterSpacing:"-.04em",

maxWidth:"1200px"
}}
>
    
    Health Connect Cloud reframes interoperability as a managed cloud service.
  </h2>

  <div
    style={{
      marginTop: "60px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "18px"
    }}
  >
    {cloudValue.map(([label, text]) => (
      <div
        key={label}
        style={{
          border: "1px solid #333",
          padding: "28px",
          background: "#181818",
          minHeight: "240px"
        }}
      >
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#999"
          }}
        >
          {label}
        </p>

        <p
          style={{
            marginTop: "40px",
            fontSize: "20px",
            lineHeight: "1.45",
            color: "#f2f2f2"
          }}
        >
          {text}
        </p>
      </div>
    ))}
  </div>
</section>
<section id="timeline"
style={{
padding:"100px 9vw",
background:"#F6F8FB"
}}
>

<p
style={{
fontSize:"13px",
letterSpacing:"3px",
textTransform:"uppercase",
color:"#777"
}}
>
Competitive Positioning
</p>

<h2
style={{
fontSize:"56px",
fontWeight:"400",
maxWidth:"1000px",
lineHeight:"1"
}}
>
InterSystems appears positioned between healthcare workflow depth and cloud platform evolution.
</h2>

<div
style={{
marginTop:"70px",
position:"relative",
height:"520px",

background:
`
linear-gradient(
180deg,
#faf8f4,
#ffffff
)
`,

border:"1px solid #ddd",

overflow:"hidden"
}}
>

<div
style={{
position:"absolute",

left:"50%",
top:0,

width:"1px",
height:"100%",

background:"#ddd"
}}
/>

<div
style={{
position:"absolute",

top:"50%",

height:"1px",

width:"100%",

background:"#ddd"
}}
/>

<div
style={{
position:"absolute",
left:"50px",
top:"60px",
fontSize:"15px",
color:"#777"
}}
>
↑ Clinical Workflow Depth
</div>

<div
style={{
position:"absolute",
bottom:"50px",
right:"50px",
fontSize:"15px",
color:"#777"
}}
>
Cloud Platform Capability →
</div>

<div
style={{
position:"absolute",

top:"70px",
left:"70px",

fontSize:"14px",
color:"#888"
}}
>
Healthcare specialists
</div>

<div
style={{
position:"absolute",

top:"70px",
right:"70px",

fontSize:"14px",
color:"#888"
}}
>
Cloud-native healthcare
</div>

<div
style={{
position:"absolute",

bottom:"70px",
left:"70px",

fontSize:"14px",
color:"#888"
}}
>
Traditional systems
</div>

<div
style={{
position:"absolute",

bottom:"70px",
right:"70px",

fontSize:"14px",
color:"#888"
}}
>
Platform players
</div>

{
competitors.map((c,index)=>(

<div
key={c.name}

style={{

position:"absolute",

left:[
"42%",
"22%",
"60%",
"82%",
"70%",
"55%"
][index],

top:[
"28%",
"18%",
"20%",
"55%",
"72%",
"62%"
][index],

transform:"translate(-50%,-50%)"
}}

>

<div

style={{

width:
c.name==="InterSystems"
?"36px"
:"24px",

height:
c.name==="InterSystems"
?"36px"
:"24px",

borderRadius:"50%",

background:
c.name==="InterSystems"
?"#0f172a"
:"#888",

boxShadow:
c.name==="InterSystems"
?"0 0 50px rgba(15,23,42,.35)"
:"none"

}}
/>

<div

style={{

marginTop:"14px",

padding:
c.name==="InterSystems"
?"8px 14px"
:"0",

display:"inline-block",

background:
c.name==="InterSystems"
?"#0f172a"
:"transparent",

color:
c.name==="InterSystems"
?"white"
:"#222",

borderRadius:"999px",

fontSize:"18px"

}}

>

{c.name}

</div>

</div>

))

}

<div

>


</div>

</div>
<div
style={{
marginTop:"32px",
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"32px"
}}
>

<div
style={{
background:"#fff",
padding:"28px",
border:"1px solid #ddd"
}}
>

<h3>
Reading the Matrix
</h3>

<p>
Vertical:
Healthcare workflow depth
</p>

<p>
Horizontal:
Cloud platform capability
</p>

</div>

<div
style={{
background:"#0B1F53",
maxWidth:"760px",
margin:"auto",
color:"white",
padding:"28px"
}}
>

<h3>
Strategic Interpretation
</h3>

<div
style={{
marginTop:"40px"
}}
>

<p
style={{
fontSize:type.section,

fontWeight:"600",

letterSpacing:"-.03em",

marginBottom:"40px"
}}
>
InterSystems occupies a bridge position across healthcare and cloud infrastructure.
</p>

<div
style={{
display:"grid",
gap:"18px"
}}
>

<div>
→ EHR specialists
</div>

<div>
→ Healthcare infrastructure
</div>

<div>
→ Cloud-native platforms
</div>

</div>

<p
style={{
marginTop:"36px",
fontSize:"18px",
lineHeight:"1.8",
color:"#d0d0d0"
}}
>
This positioning may support expansion into managed interoperability and healthcare cloud services.
</p>

</div>

</div>

</div>
</section>
<section id="operating"
style={{
padding:"120px 9vw",
background:"#f7f7f5"
}}
>

<p
style={{
fontSize:"14px",
letterSpacing:"2px",
textTransform:"uppercase",
color:"#666"
}}
>
Executive Hypothesis
</p>

<h2
style={{
fontSize:"64px",
maxWidth:"900px",
lineHeight:"1.05"
}}
>
InterSystems is becoming
the coordination layer
of healthcare.
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"28px",
marginTop:"80px"
}}
>

{[
{
title:"Revenue concentration",
body:"Dependence on Epic suggests pressure to diversify monetization."
},

{
title:"Cloud migration",
body:"Health Connect Cloud creates recurring subscription revenue."
},

{
title:"FHIR strategy",
body:"FHIR repository expands ownership of healthcare data layers."
}

].map((x)=>(
<div
style={{
background:"white",
padding:"36px",
border:"1px solid #ddd"
}}
>

<h3>
{x.title}
</h3>

<p
style={{
marginTop:"20px",
color:"#666",
lineHeight:"1.85"
}}
>
{x.body}
</p>

</div>
))}

</div>

</section>
<section
style={{
padding:"120px 9vw",
background:
"linear-gradient(180deg,#0B1F53 0%, #071827 100%)",
boxShadow:"0 30px 60px rgba(0,25,80,.25)",
}}
>

<p
style={{
fontSize:"14px",
letterSpacing:"2px",
textTransform:"uppercase",
color:"#666"
}}
>
Strategic Evolution Timeline
</p>

<h2
style={{
fontSize:"clamp(44px,5vw,72px)",
lineHeight:"1.1",
maxWidth:"1200px",
fontWeight:"300",

color:"#f8fafc"
}}
>
Intelligence should transform market signals into strategic advantage.
</h2>

<div
style={{
marginTop:"80px",
position:"relative",
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"24px"
}}
>

<div
style={{
position:"absolute",
top:"38px",
left:"0",
right:"0",
height:"1px",
background:"#d6d6d6"
}}
/>

{timeline.map((item,index)=>(

<div
key={item.year}
style={{
position:"relative",
background:"#f7f5f0",
border:"1px solid #ddd",
padding:"32px",
minHeight:"300px",
transition:"transform .3s ease, box-shadow .3s ease",
animation:`fadeUp .6s ease ${index * 0.15}s both`
}}
>

<div
style={{
width:"16px",
height:"16px",
borderRadius:"50%",
background:index===3 ? "#fff" : "#888",
position:"absolute",
top:"31px",
left:"32px",
zIndex:2
}}
/>

<p
style={{
marginTop:"52px",
fontSize:"44px",
fontWeight:"400",
lineHeight:"1",
fontFamily:"Georgia, 'Times New Roman', serif"
}}
>
{item.year}
</p>

<h3
style={{
fontSize:"24px",
lineHeight:"1.25",
marginTop:"28px"
}}
>
{item.title}
</h3>

<p
style={{
fontSize:"16px",
lineHeight:"1.7",
color:"#555",
marginTop:"20px"
}}
>
{item.text}
</p>

</div>

))}

</div>

<style>
{`
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`}
</style>

</section>
<section
style={{
padding:"140px 10vw",
background:"#031b34",
color:"#f6f4ee"
}}
>

<p
style={{
fontSize:"13px",
letterSpacing:"4px",
textTransform:"uppercase",
opacity:.7,
marginBottom:"40px"
}}
>
Executive Thesis
</p>

<h2
style={{

fontSize:"clamp(32px,4.5vw,64px)",

lineHeight:"1.08",

fontWeight:"400",

letterSpacing:"-1px",

maxWidth:"760px",

marginBottom:"56px",

color:"#F6F4EE",

fontFamily:
"Inter, Arial, sans-serif"

}}
>

InterSystems is repositioning
the healthcare data layer.

</h2>

<div
style={{
maxWidth:"680px",
fontSize:"16px",
lineHeight:"1.9",
fontWeight:"400",
letterSpacing:"0px",
color:"#B9C5D8",
fontFamily:"Inter, Arial, sans-serif"
}}
>

<p>

Across the last three years, product launches,
managed cloud offerings,
and positioning shifts suggest an intentional
transition toward becoming a healthcare
infrastructure intelligence layer.

</p>

<br/>

<p>

Rather than replacing EHR platforms directly,
InterSystems appears to reduce operational
complexity and capture value through
orchestration, managed services,
and decision enablement.

</p>

<br/>

<p>

This creates a differentiated position
between workflow specialists and
cloud infrastructure providers.

</p>

</div>

</section>
<section
style={{
padding:"120px 9vw",
background:"#0B1F53",
color:"white"
}}
>

<p
style={{
fontSize:"14px",
letterSpacing:"2px",
textTransform:"uppercase",
color:"#9ca3af"
}}
>
Marketing Intelligence Operating Model
</p>

<h2
style={{
fontSize:"clamp(48px,4vw,68px)",

lineHeight:"1.1",

maxWidth:"1000px",

margin:"40px auto 100px",

textAlign:"center",

fontWeight:"400",

color:"#ffffff",

position:"relative",

zIndex:10
}}
></h2>

<div
style={{
marginTop:"80px",
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"1px",
background:"#334155"
}}
>

{operatingModel.map((item,index)=>(

<div
key={item.question}
style={{
background:"#0b1020",
padding:"34px",
minHeight:"360px"
}}
>

<p
style={{
fontSize:type.small,
color:"#94a3b8",
letterSpacing:"2px",
textTransform:"uppercase"
}}
>
0{index+1}
</p>

<div
style={{
marginTop:"28px"
}}
>

<div
style={{
fontSize:"12px",
letterSpacing:"2px",
textTransform:"uppercase",
color:"#00A3E0"
}}
>
{item.stage}
</div>

<h3
style={{
marginTop:"14px",

fontSize:"34px",

lineHeight:"1.15"
}}
>
{item.question}
</h3>

<div
style={{
marginTop:"28px",

fontSize:"18px",

color:"#dbeafe"
}}
>
{item.output}
</div>

<p
style={{
marginTop:"24px",

lineHeight:"1.9",

color:"#cbd5e1"
}}
>
{item.value}
</p>

<div
style={{
marginTop:"30px",

paddingTop:"20px",

borderTop:"1px solid rgba(255,255,255,.15)"
}}
>

<div
style={{
fontSize:"11px",

letterSpacing:"2px",

color:"#64748b"
}}
>
BUSINESS IMPACT
</div>

<p
style={{
marginTop:"12px",

color:"#ffffff"
}}
>
{item.impact}
</p>

</div>

</div>

</div>

))}

</div>

</section>
    </main>
  )
}