import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Tools I use, gear I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools I use, gear I love, and other things I recommend."
      intro={`I sometimes get asked a about the things I use to build software, stay productive, or buy to fool 
        myself into thinking I&apos;m being productive when I&apos;m really just procrastinating. 
        Here&apos;s a big list of all of my favorite stuff.`}  
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="ASUS ROG Zephyrus G16 (2024), Intel Core Ultra 9 185, 32GB RAM, NVidia RTX 4080 12GB">
            My first foray into a gaming laptop as my daily driver, coming from a long line of HP Spectre x360s.
            This generation of CPUs and GPUs is truly impressive in terms of performance, battery life, and screen quality. 
            The OLED panel along with the surprisingly satisfying keyboard make coding on the go a breeze, along with the occasional high-quality gaming distraction.
          </Tool>
          <Tool title="LG UltraGear 32-inch OLED Gaming Monitor (32GS95UE) 4k, 240Hz AND 1080p, 480Hz">
            An unbelievable gaming monitor that also happens to also be great for productivity. I tend to use it at 4k 240Hz for buttery smooth productivity.
            Before buying it, I was worried about the general sentiment that OLED monitors weren&apos;t so great if one intends to mostly stare at text all day (such as code).
            I&apos;m happy to say though that this sub-pixel layout has not been an issue for me at all. The colors are vibrant, and the text is clear with no jaggies.
          </Tool>
          <Tool title="Custom QwertyKeys QK100">
            I&apos;m a bit of a keyboard snob these days. I put this barebones kit together with:
            - Gateron Oil King switches
            - CeraKeys White-on-Black ceramic keycaps
            - Plate foam and case foam installed
          </Tool>
          <Tool title="Logitech MX Master 3S">
            The now and forever reigning champion of productivity mice. I&apos;ve tried a lot of other mice - mostly gaming ones - but I always come back to this one when 
            it comes time to get work done. If it&apos;s time to get some sweaty gaming sessions in, I switch off to...
          </Tool>
          <Tool title="Logitech G Pro X Superlight 2">
            Light as a feather with great tracking. In conjuntion with a PowerPlay mat, I can wirelessly click away.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Yeah, me too. I have no complaints about this editor. The millions of extensions help me turn it into exactly what I need. 
            I tend to only use it for frontend work. When I need to do my backend work, I switch to...
          </Tool>
          <Tool title="JetBrains Rider">
            As a C#/.NET enthusiast, without the budget for a full commercial Visual Studio license, Rider is the perfect solution.
            With much more affordable individual licenses and quick update cycles to support new evolutions in the .NET ecosystem, I can&apos;t recommend it enough.
          </Tool>
          <Tool title="Sublime Text 4">
            Once the king of editing for me, this is now my trusted scratchpad. Not having to save my work to any particular file while it keeps the content in 
            my buffers even between restarts is truly invaluable - especially in more scatterbrained scenarios such as looking deadlines.
          </Tool>
          <Tool title="Windows Terminal">
            Windows Terminal hosts my terminals. Being on a Windows-based machine, I don&apos;t see as I have a choice for this one.
          </Tool>
          <Tool title="WSL2 (Windows Subsystem for Linux)">
            Windows does not stop me from having access to the best dev tooling out there anymore!
            The default profile that I load in Windows Terminal.
          </Tool>
          <Tool title="Oh My Posh">
            Customizing the terminal prompt is a right of passage for any developer. Oh My Posh makes it easy to make my terminal look pretty whether I&apos;m in 
            Powershell or Ubuntu on WSL2.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Excalidraw">
            I love a good flowchart. Excalidraw is the best tool I&apos;ve found for making them. It&apos;s simple, fast, and the output looks great.
          </Tool>
          <Tool title="Draw.io (now diagrams.net)">
            Like Excalidraw, but for when I need swimlanes.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            I love good docs and Notion lets me create them and collaborate on them with my team. 
          </Tool>
          <Tool title="Obsidian">
            My second brain and personal knowledgebase. I have one vault for each concern - one for my life, one for work, one for my business, etc. 
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
