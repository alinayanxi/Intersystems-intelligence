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
    "Market signal",
    "Healthcare organizations are under pressure to reduce infrastructure ownership, integration maintenance, and implementation complexity."
  ],
  [
    "Product interpretation",
    "Health Connect Cloud turns interoperability from a customer-managed software function into a cloud-managed operating capability."
  ],
  [
    "Commercial implication",
    "The value proposition moves from technical connectivity to faster time-to-value, scalability, support, and reduced operational burden."
  ],
  [
    "Strategic watchpoint",
    "The key question is whether InterSystems can package this technical strength into a clear executive buying narrative."
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
const intelligenceFramework = [
  {
    step: "01",
    title: "Signal Collection",
    text: "Track public product launches, hiring signals, competitor messaging, customer cases, and healthcare technology trends."
  },
  {
    step: "02",
    title: "Signal Interpretation",
    text: "Identify whether signals point to product expansion, commercial repositioning, customer pressure, or competitive movement."
  },
  {
    step: "03",
    title: "Strategic Hypothesis",
    text: "Translate patterns into business hypotheses about where InterSystems may be moving next."
  },
  {
    step: "04",
    title: "Commercial Implication",
    text: "Connect intelligence to messaging, segmentation, campaign priorities, and sales enablement."
  }
]
const strategicQuestions = [
  {
    question: "Can managed cloud integration become the next growth engine?",
    context:
      "Health Connect Cloud suggests a shift from customer-managed integration software toward a subscription-based, fully managed healthcare integration model.",
    implication:
      "If adoption accelerates, InterSystems can strengthen recurring revenue while reducing the operational burden for health systems."
  },
  {
    question: "How defensible is interoperability against hyperscalers and EHR vendors?",
    context:
      "Cloud providers are moving deeper into healthcare data infrastructure, while EHR vendors continue expanding platform ecosystems.",
    implication:
      "InterSystems needs to position interoperability not as a connector, but as a healthcare-native operating capability."
  },
  {
    question: "Can FHIR become a strategic control point rather than a compliance feature?",
    context:
      "IRIS for Health’s FHIR repository and healthcare data management capabilities create a stronger role in AI readiness and data activation.",
    implication:
      "FHIR can support a broader narrative around AI pipelines, lower latency, and unified healthcare data access."
  },
  {
    question: "Can AI reduce implementation burden and expand product scalability?",
    context:
      "IntelliCare and AI-enabled HealthShare capabilities indicate movement toward workflow automation and decision support.",
    implication:
      "The commercial opportunity is not only AI features, but reducing the professional services intensity of healthcare deployments."
  }
]
const signalInsightRecommendation = [
  {
    signal: "Healthcare organizations are under pressure to reduce IT ownership and maintenance burden.",
    insight:
      "The buyer conversation is shifting from software capability to operating efficiency.",
    recommendation:
      "Position Health Connect Cloud around reduced operational load, faster deployment, and managed interoperability."
  },
  {
    signal: "FHIR, AI readiness, and unified data access are becoming central to healthcare technology narratives.",
    insight:
      "FHIR is moving beyond compliance and becoming a control layer for AI-enabled healthcare data.",
    recommendation:
      "Frame IRIS for Health as an AI-ready healthcare data foundation, not only a standards-based repository."
  },
  {
    signal: "Cloud providers and EHR vendors are expanding into adjacent healthcare infrastructure layers.",
    insight:
      "InterSystems’ differentiation depends on owning the space between clinical workflows and data infrastructure.",
    recommendation:
      "Strengthen messaging around healthcare-native orchestration, not generic cloud integration."
  }
]
const intelligenceDashboard = [
  {
    metric: "Managed Cloud Momentum",
    status: "High",
    score: "84",
    note: "Health Connect Cloud strengthens the shift from software deployment to managed healthcare infrastructure."
  },
  {
    metric: "AI Data Readiness",
    status: "Strong",
    score: "87",
    note: "FHIR-centered data access creates a stronger foundation for clinical AI workflows and real-time decision support."
  },
  {
    metric: "Healthcare Specificity",
    status: "Defensible",
    score: "90",
    note: "InterSystems remains differentiated by healthcare standards, integration depth, and mission-critical reliability."
  },
  {
    metric: "Commercial Clarity",
    status: "Monitor",
    score: "68",
    note: "The strategic challenge is translating technical depth into simpler executive-level ROI and GTM messaging."
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
top:0,

height:"72px",

background:"rgba(255,255,255,.92)",

backdropFilter:"blur(14px)",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

padding:"0 48px",

borderBottom:
`1px solid ${brand.border}`,

zIndex:100
}}
>
</header>
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
fontSize:"clamp(28px,4vw,52px)",
lineHeight:"1.1",
fontWeight:"500",
maxWidth:"900px",

color:"#FFFFFF"
}}
>
Health Connect Cloud shifts interoperability from software ownership to managed infrastructure.
</h2>

  <div
    style={{
      marginTop: "60px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "18px",
      color: brand.navy,
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
<section
style={{
padding:"110px 9vw",
background:"#ffffff"
}}
>

<p
style={{
fontSize:"12px",
letterSpacing:"4px",
textTransform:"uppercase",
color:brand.blue,
marginBottom:"28px"
}}
>
Market Intelligence Framework
</p>

<h2
style={{
fontSize:"clamp(32px,4vw,56px)",
lineHeight:"1.08",
fontWeight:"500",
maxWidth:"900px",
color:brand.navy,
marginBottom:"64px"
}}
>
Turning market signals into strategic decisions.
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"22px"
}}
>

{intelligenceFramework.map((item)=>(
<div
key={item.step}
style={{
border:`1px solid ${brand.border}`,
padding:"30px",
background:brand.light,
minHeight:"260px"
}}
>

<div
style={{
fontSize:"13px",
letterSpacing:"2px",
color:brand.cyan,
marginBottom:"30px"
}}
>
{item.step}
</div>

<h3
style={{
fontSize:"22px",
lineHeight:"1.25",
color:brand.navy,
marginBottom:"22px"
}}
>
{item.title}
</h3>

<p
style={{
fontSize:"15px",
lineHeight:"1.75",
color:brand.text
}}
>
{item.text}
</p>

</div>
))}

</div>

</section>
<section
style={{
padding:"110px 9vw",
background:brand.soft
}}
>

<p
style={{
fontSize:"12px",
letterSpacing:"4px",
textTransform:"uppercase",
color:brand.blue,
marginBottom:"28px"
}}
>
Strategic Questions
</p>

<h2
style={{
fontSize:"clamp(30px,4vw,52px)",
lineHeight:"1.08",
fontWeight:"500",
maxWidth:"900px",
color:brand.navy,
marginBottom:"24px"
}}
>
Questions executives should monitor.
</h2>

<p
style={{
fontSize:"16px",
lineHeight:"1.8",
maxWidth:"760px",
color:brand.text,
marginBottom:"60px"
}}
>
A market intelligence function should not only summarize market activity. It should identify which questions deserve continuous monitoring because they may influence product positioning, commercial strategy, and executive decision-making.
</p>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"24px"
}}
>

{strategicQuestions.map((item,index)=>(
<div
key={item.question}
style={{
background:"#ffffff",
border:`1px solid ${brand.border}`,
padding:"34px",
minHeight:"360px",
boxShadow:"0 18px 45px rgba(11,31,83,.06)"
}}
>

<div
style={{
fontSize:"12px",
letterSpacing:"2px",
color:brand.cyan,
marginBottom:"28px"
}}
>
0{index + 1}
</div>

<h3
style={{
fontSize:"24px",
lineHeight:"1.25",
fontWeight:"600",
color:brand.navy,
marginBottom:"24px"
}}
>
{item.question}
</h3>

<p
style={{
fontSize:"15px",
lineHeight:"1.75",
color:brand.text,
marginBottom:"24px"
}}
>
<strong>Context: </strong>
{item.context}
</p>

<p
style={{
fontSize:"15px",
lineHeight:"1.75",
color:brand.deep
}}
>
<strong>Strategic implication: </strong>
{item.implication}
</p>

</div>
))}

</div>

</section>
<section
style={{
padding:"110px 9vw",
background:"#ffffff"
}}
>

<p
style={{
fontSize:"12px",
letterSpacing:"4px",
textTransform:"uppercase",
color:brand.blue,
marginBottom:"28px"
}}
>
Signal to Recommendation
</p>

<h2
style={{
fontSize:"clamp(30px,4vw,52px)",
lineHeight:"1.08",
fontWeight:"500",
maxWidth:"900px",
color:brand.navy,
marginBottom:"24px"
}}
>
Turning weak signals into commercial action.
</h2>

<p
style={{
fontSize:"16px",
lineHeight:"1.8",
maxWidth:"760px",
color:brand.text,
marginBottom:"60px"
}}
>
The value of market intelligence is not the collection of information. It is the ability to convert fragmented external signals into clear implications for product marketing, positioning, and go-to-market strategy.
</p>

<div
style={{
display:"grid",
gap:"24px"
}}
>

{signalInsightRecommendation.map((item,index)=>(
<div
key={item.signal}
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr 1fr",
gap:"1px",
background:brand.border,
border:`1px solid ${brand.border}`
}}
>

<div
style={{
background:brand.light,
padding:"32px"
}}
>
<p
style={{
fontSize:"12px",
letterSpacing:"3px",
textTransform:"uppercase",
color:brand.cyan,
marginBottom:"24px"
}}
>
Signal 0{index + 1}
</p>

<p
style={{
fontSize:"16px",
lineHeight:"1.75",
color:brand.text
}}
>
{item.signal}
</p>
</div>

<div
style={{
background:"#ffffff",
padding:"32px"
}}
>
<p
style={{
fontSize:"12px",
letterSpacing:"3px",
textTransform:"uppercase",
color:brand.blue,
marginBottom:"24px"
}}
>
Insight
</p>

<p
style={{
fontSize:"16px",
lineHeight:"1.75",
color:brand.deep
}}
>
{item.insight}
</p>
</div>

<div
style={{
background:brand.navy,
padding:"32px"
}}
>
<p
style={{
fontSize:"12px",
letterSpacing:"3px",
textTransform:"uppercase",
color:brand.cyan,
marginBottom:"24px"
}}
>
Recommendation
</p>

<p
style={{
fontSize:"16px",
lineHeight:"1.75",
color:"#ffffff"
}}
>
{item.recommendation}
</p>
</div>

</div>
))}

</div>

</section>
<section
style={{
padding:"110px 9vw",
background:brand.navy,
color:"#ffffff"
}}
>

<p
style={{
fontSize:"12px",
letterSpacing:"4px",
textTransform:"uppercase",
color:brand.cyan,
marginBottom:"28px"
}}
>
Strategic Intelligence Dashboard
</p>

<h2
style={{
fontSize:"clamp(30px,4vw,52px)",
lineHeight:"1.08",
fontWeight:"500",
maxWidth:"900px",
color:"#ffffff",
marginBottom:"24px"
}}
>
A dashboard view of InterSystems’ strategic momentum.
</h2>

<p
style={{
fontSize:"16px",
lineHeight:"1.8",
maxWidth:"760px",
color:"#D8E6F0",
marginBottom:"60px"
}}
>
This dashboard is directional, not audited. It translates public signals into a structured view of where InterSystems appears to have strategic momentum and where execution risk should be monitored.
</p>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"22px"
}}
>

{intelligenceDashboard.map((item)=>(
<div
key={item.metric}
style={{
background:"rgba(255,255,255,.08)",
border:"1px solid rgba(255,255,255,.14)",
padding:"30px",
minHeight:"320px",
borderRadius:"10px"
}}
>

<p
style={{
fontSize:"12px",
letterSpacing:"3px",
textTransform:"uppercase",
color:brand.cyan,
marginBottom:"28px"
}}
>
{item.metric}
</p>

<div
style={{
fontSize:"54px",
lineHeight:"1",
fontWeight:"600",
marginBottom:"18px"
}}
>
{item.score}
</div>

<div
style={{
display:"inline-block",
padding:"8px 14px",
borderRadius:"999px",
background:"rgba(0,163,224,.18)",
color:"#ffffff",
fontSize:"13px",
marginBottom:"28px"
}}
>
{item.status}
</div>

<p
style={{
fontSize:"15px",
lineHeight:"1.75",
color:"#D8E6F0"
}}
>
{item.note}
</p>

</div>
))}

</div>

<div
style={{
marginTop:"46px",
paddingTop:"28px",
borderTop:"1px solid rgba(255,255,255,.18)",
maxWidth:"900px",
color:"#D8E6F0",
fontSize:"15px",
lineHeight:"1.8"
}}
>
<strong style={{color:"#ffffff"}}>
How to read this dashboard:
</strong>
{" "}
The scores are directional and illustrative. They represent a structured synthesis of visible product direction, market positioning, and commercial implications rather than audited performance metrics.
</div>

</section>
<section
id="sources"
style={{
padding:"100px 9vw",
background:"#ffffff"
}}
>
<p
style={{
fontSize:"12px",
letterSpacing:"4px",
textTransform:"uppercase",
color:brand.blue,
marginBottom:"28px"
}}
>
Methodology & Sources
</p>

<h2
style={{
fontSize:"clamp(30px,4vw,52px)",
lineHeight:"1.08",
fontWeight:"500",
maxWidth:"850px",
color:brand.navy,
marginBottom:"34px"
}}
>
This brief is based on publicly observable market signals.
</h2>

<p
style={{
fontSize:"16px",
lineHeight:"1.8",
maxWidth:"780px",
color:brand.text
}}
>
The analysis draws from public product pages, company announcements, product positioning, competitive messaging, healthcare technology trends, and publicly available information. It is prepared independently for interview discussion and does not represent InterSystems’ internal views.
</p>
</section>
<section
id="recommendation"
style={{
padding:"110px 9vw",
background:brand.navy,
color:"#ffffff"
}}
>
<p
style={{
fontSize:"12px",
letterSpacing:"4px",
textTransform:"uppercase",
color:brand.cyan,
marginBottom:"28px"
}}
>
Final Recommendation
</p>

<h2
style={{
fontSize:"clamp(32px,4vw,56px)",
lineHeight:"1.08",
fontWeight:"500",
maxWidth:"900px",
color:"#ffffff",
marginBottom:"42px"
}}
>
InterSystems should continue owning the healthcare data coordination layer.
</h2>

<p
style={{
fontSize:"17px",
lineHeight:"1.85",
maxWidth:"820px",
color:"#D8E6F0"
}}
>
The strongest opportunity is not replacing EHR systems. It is becoming the layer that helps healthcare organizations connect, structure, and operationalize fragmented data across clinical workflows, infrastructure, and intelligence.
</p>

<p
style={{
fontSize:"17px",
lineHeight:"1.85",
maxWidth:"820px",
color:"#D8E6F0",
marginTop:"26px"
}}
>
Health Connect Cloud, IRIS for Health, and HealthShare can be positioned around managed interoperability, AI-ready data infrastructure, and reduced operational complexity.
</p>
</section>
<section
id="author"
style={{
padding:"90px 9vw",
background:brand.light
}}
>
<p
style={{
fontSize:"12px",
letterSpacing:"4px",
textTransform:"uppercase",
color:brand.blue,
marginBottom:"28px"
}}
>
About the Author
</p>

<h2
style={{
fontSize:"clamp(28px,3vw,44px)",
lineHeight:"1.12",
fontWeight:"500",
maxWidth:"760px",
color:brand.navy,
marginBottom:"32px"
}}
>
Prepared by Alina Chen.
</h2>

<p
style={{
fontSize:"16px",
lineHeight:"1.8",
maxWidth:"780px",
color:brand.text
}}
>
Alina Chen is a Boston University graduate student and Marketing Intelligence Associate candidate. This project demonstrates how she structures fragmented market signals into strategic narratives, product implications, and commercial recommendations.
</p>
</section>
    </main>
  )
}