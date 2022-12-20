import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box, Typography, Grid, Icon, Stack, Tooltip, IconButton, CardActions, CardContent, CardHeader, Card, Link, Button } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoToWebsiteIcon from '@mui/icons-material/OpenInBrowser';
import DocsIcon from '@mui/icons-material/MenuBook';
import PDFIcon from '@mui/icons-material/PictureAsPdf';
import PipIcon from '@mui/icons-material/ViewInAr';

// @ts-ignore
import OrcidIcon from '../images/orcid_logo.svg';
// @ts-ignore
import GoogleScholarIcon from '../images/google_scholar_logo.svg';
// @ts-ignore
import HalIcon from '../images/hal_logo.png';
// @ts-ignore
import DblpIcon from '../images/dblp_logo.png';

import CodeChip from '../components/CodeChip';
import { Title, Paragraph } from '../components/StyledComponents';
import { short_intro_text, about_me_text, projects, skills, skillsCategories } from '../content';
import Seo from '../components/layout/seo';
import LinkOut from "../components/LinkOut";
import ProfileButton from "../components/ProfileButton";
import { FC } from '../utils/types';
// import MyMarkdown from "../components/MyMarkdown";


const IndexPage: FC = () => {
  const theme = useTheme();

  const [state, setState] = React.useState({
    filterSkills: 'all',
    dialogOpen: false,
    project_license: '',
    language_autocomplete: [],
  });
  const stateRef = React.useRef(state);
  // Avoid conflict when async calls
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  return(
    <Container className='mainContainer'>
      <Seo title="Home" />

      {/* <Title>
        Online profiles
      </Title> */}

      <Card style={{display: 'inline-block', padding: theme.spacing(2)}}>
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" justifyContent="center">
          <ProfileButton label='CV'
            tooltip='Curriculum Vitæ'
            href="/cv_vincent_emonet.pdf"
            color="error"
            icon={<PDFIcon />}
          />
          <ProfileButton label='vemonet'
            tooltip='GitHub profile'
            href="https://github.com/vemonet"
            color="warning"
            icon={<GitHubIcon />}
          />
          <ProfileButton label='vincent-emonet'
            tooltip='LinkedIn profile'
            href="https://www.linkedin.com/in/vincent-emonet"
            color="info"
            icon={<LinkedInIcon />}
          />
          <ProfileButton label='0000-0002-1501-1082'
            tooltip='ORCID profile'
            href="https://orcid.org/0000-0002-1501-1082"
            color="success"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={OrcidIcon} />
            </Icon>}
          />
          {/* <ProfileButton label='Solid pod'
            tooltip='SOLID pod (Social Linked Data)'
            href="https://vemonet.solidcommunity.net/profile/#me"
            color="info"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={SolidIcon} />
            </Icon>}
          /> */}
        </Stack>
      </Card>

      <div style={{marginTop: theme.spacing(3), textAlign: 'center'}}>
        {short_intro_text}
      </div>


      <Title id='publications'>
        📚️ Publications
      </Title>

      <Card style={{display: 'inline-block', padding: theme.spacing(2)}}>
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" justifyContent="center">
          <ProfileButton label='Google Scholar'
            tooltip='Publications on Google Scholar'
            href="https://scholar.google.fr/citations?user=G59f3woAAAAJ"
            color="warning"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={GoogleScholarIcon} />
            </Icon>}
          />
          <ProfileButton label='HAL'
            tooltip='Publications on HAL open archives'
            href="https://hal.archives-ouvertes.fr/search/index/q/*/authFullName_s/Vincent+Emonet"
            color="purple"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={HalIcon} />
            </Icon>}
          />
          <ProfileButton label='dblp'
            tooltip='Publications on dblp'
            href='http://dblp.uni-trier.de/pers/hd/e/Emonet:Vincent'
            color='yellow'
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={DblpIcon} />
            </Icon>}
          />
        </Stack>
      </Card>


      <Title id='projects'>
        🗂️ Latest projects
      </Title>

      <Grid container spacing={2} alignItems="stretch">
        { projects.map((project: any, key: number) => (
          <Grid item xs={12} md={4} key={key}>
            <Card style={{display: 'inline-block', textAlign: 'left', height: '100%'}}>
              <CardHeader
                title={project.title}
                titleTypographyProps={{variant: 'h6' }}
                subheader={<>
                  { project.langs.map((lang: any, key2: number) => (
                    <CodeChip lang={lang} key={key2}/>
                  ))}
                </>}
                // avatar={<GitHubIcon />}
                style={{paddingBottom: '0px', textAlign: 'center'}}
              />
              <CardContent style={{paddingBottom: '0px', paddingTop: theme.spacing(1)}}>
                <Typography variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{display: 'block', paddingTop: '0px', textAlign: 'center'}}>
                { project.website_url &&
                  <Tooltip title='Go to the website'>
                    <a href={project.website_url} target='_blank'>
                      <IconButton aria-label="Go to website">
                        <GoToWebsiteIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.docs_url &&
                  <Tooltip title='Documentation'>
                    <a href={project.docs_url} target='_blank'>
                      <IconButton aria-label="Go to documentation">
                        <DocsIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.git_url &&
                  <Tooltip title='Source code on GitHub'>
                    <a href={project.git_url} target='_blank'>
                      <IconButton aria-label="GitHub link">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.pip_url &&
                  <Tooltip title='Python library on PyPI'>
                    <a href={project.pip_url} target='_blank'>
                      <IconButton aria-label="Pip link">
                        <PipIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Title id="about">
        💬 About me
      </Title>

      {about_me_text}

      <Title id="skills">
        🛠️ Skills
      </Title>

      <Paragraph style={{textAlign: 'center'}}>
        The displayed scores are obviously subjective, please refer to my <LinkOut href="/cv_vincent_emonet.pdf">CV</LinkOut> for a better account of how those skills were used.
      </Paragraph>

      <Button variant="text" color="inherit" onClick={() => { updateState({ filterSkills: 'all'}) }} style={{textTransform: 'none'}}>
        💥 All
      </Button>
      { skillsCategories.map((cat: any, key: number) => (
        <Button variant="text" color={cat.color} style={{textTransform: 'none'}} key={key}
        onClick={() => { updateState({ filterSkills: cat.title}) }}>
          {cat.emoji} {cat.title}
        </Button>
      ))}

      <Grid container spacing={2} alignItems="stretch" style={{marginTop: theme.spacing(1)}}>
        { skills.map((skill: any, key: number) => {
          const cat: any = skillsCategories.filter(obj => { return obj.title === skill.category[0]; })[0]

          if (state.filterSkills == 'all' || skill.category.includes(state.filterSkills)) {
            return (
              <Grid item xs={12} md={4} key={key}>
                <Card style={{textAlign: 'left', height: '100%', padding: theme.spacing(2)}}>
                  <CardContent style={{padding: '0px'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {/* ##ch is the size of the largest skill name */}
                      <Typography variant="body2" style={{width: '20ch'}}>
                        {skill.title}
                      </Typography>
                      <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate"
                          value={skill.competency*20}
                          color={cat.color}
                        />
                      </Box>
                      <Box sx={{ minWidth: 35 }}>
                        <Typography variant="body2" color="text.secondary">{skill.competency}/5</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
        }})}
      </Grid>


      <Title id="contact">
        📬️ Contact me
      </Title>

      <Paragraph style={{textAlign: 'center'}}>
        vincent.emonet@gmail.com
      </Paragraph>

      {/* <MyMarkdown>
       Trying markdown
      </MyMarkdown> */}

    </Container>
  )
}
export default IndexPage;