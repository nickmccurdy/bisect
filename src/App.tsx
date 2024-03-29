import "@fontsource/roboto"
import "@fontsource/roboto/500.css"
import { CallSplit } from "@mui/icons-material"
import { Container, Link, Typography } from "@mui/material"
import { useState } from "react"
import Bisect from "./Bisect"
import SetupForm from "./SetupForm"

export default function App() {
  const [candidates, setCandidates] = useState<string[]>()

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1">
        <CallSplit /> Bisect
      </Typography>
      <Typography gutterBottom>
        An interactive GUI for binary searches. Inspired by{" "}
        <Link href="https://git-scm.com/docs/git-bisect">
          <code>git bisect</code>
        </Link>
        .
      </Typography>

      {candidates ? (
        <Bisect
          candidates={candidates}
          reset={() => setCandidates(undefined)}
        />
      ) : (
        <SetupForm onSubmit={setCandidates} />
      )}

      <br />

      <Typography>
        <Link href="https://github.com/nickmccurdy/bisect">
          Source on GitHub
        </Link>
      </Typography>
    </Container>
  )
}
