import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Estudiá Ciencia — Estudiá en el Obser',description:'Astronomía, Geofísica y Meteorología en la FCAG-UNLP.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
