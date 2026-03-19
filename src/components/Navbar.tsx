import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  AppBar, Box, Button, Chip, Drawer, IconButton,
  List, ListItemButton, ListItemText, Stack, Toolbar, Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const navLinks = [
  { label: 'The Journey',    path: '/journey' },
  { label: 'Culture Towns',  path: '/culture-towns' },
  { label: 'Partners',       path: '/partners' },
  { label: 'Flights In',     path: '/flights' },
  { label: 'Plan A Visit',   path: '/visit' },
  { label: 'Governance',     path: '/governance' },
  { label: 'Investor Pitch', path: '/pitch', highlight: true },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'rgba(7, 4, 14, 0.72)',
          borderBottom: '1px solid rgba(255,77,109,0.3)',
          backdropFilter: 'blur(18px)',
        }}
      >
        <Toolbar sx={{ py: 1, gap: 2 }}>
          {/* Brand */}
          <Typography
            onClick={() => navigate('/')}
            variant="h6"
            sx={{
              cursor: 'pointer',
              letterSpacing: 1.4,
              textTransform: 'uppercase',
              fontWeight: 800,
              textShadow: '0 0 24px rgba(255,77,109,0.9)',
              fontSize: { xs: '0.78rem', sm: '0.92rem' },
              flexShrink: 0,
            }}
          >
            Happily Ever After City
          </Typography>

          <Chip
            label="Open Tonight"
            size="small"
            sx={{ bgcolor: 'rgba(255,77,109,0.16)', color: '#ffd3dc', border: '1px solid rgba(255,77,109,0.4)', fontWeight: 700, flexShrink: 0 }}
          />

          {/* Desktop nav */}
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              if ('highlight' in link && link.highlight) {
                return (
                  <Button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    size="small"
                    variant={active ? 'contained' : 'outlined'}
                    sx={{
                      ml: 1,
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      borderRadius: 2,
                      borderColor: 'rgba(255,204,77,0.6)',
                      color: active ? '#07101a' : '#ffe9af',
                      bgcolor: active ? '#ffe9af' : 'transparent',
                      '&:hover': { borderColor: '#ffe9af', bgcolor: 'rgba(255,204,77,0.15)' },
                    }}
                  >
                    {link.label}
                  </Button>
                )
              }
              return (
                <Button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  size="small"
                  sx={{
                    color: active ? '#ffe9af' : '#9fc7de',
                    fontWeight: active ? 800 : 500,
                    fontSize: '0.82rem',
                    borderBottom: active ? '2px solid rgba(255,204,77,0.8)' : '2px solid transparent',
                    borderRadius: 0,
                    px: 1.5,
                    '&:hover': { color: '#ffe9af' },
                  }}
                >
                  {link.label}
                </Button>
              )
            })}
          </Stack>

          <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

          <Button
            variant="outlined"
            size="small"
            sx={{ borderColor: 'rgba(255,204,77,0.55)', color: '#ffe9af', fontWeight: 700, display: { xs: 'none', sm: 'flex' }, flexShrink: 0 }}
          >
            Partner Login
          </Button>

          {/* Mobile hamburger */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ color: '#ecf4ff', display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, bgcolor: '#0b0618', borderLeft: '1px solid rgba(255,77,109,0.3)' } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#ecf4ff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {[{ label: 'Home', path: '/' }, ...navLinks].map((link) => (
            <ListItemButton
              key={link.path}
              selected={location.pathname === link.path}
              onClick={() => { navigate(link.path); setDrawerOpen(false) }}
              sx={{
                '&.Mui-selected': { bgcolor: 'rgba(255,204,77,0.1)', color: '#ffe9af' },
                color: '#c8dce9',
              }}
            >
              <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 700 }} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Button fullWidth variant="outlined" sx={{ borderColor: 'rgba(255,204,77,0.55)', color: '#ffe9af', fontWeight: 700 }}>
            Partner Login
          </Button>
        </Box>
      </Drawer>
    </>
  )
}
