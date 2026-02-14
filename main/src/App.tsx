import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import styled, { keyframes } from "styled-components";
import { 
  MdShoppingCart, 
  MdPerson, 
  MdHome, 
  MdTrendingUp, 
  MdNotifications,
  MdSettings,
  MdAccountCircle,
  MdCalendarToday,
  MdAttachMoney,
  MdInventory,
  MdPeople,
  MdBarChart,
  MdSecurity,
  MdSpeed,
  MdLocalShipping,
  MdShoppingBag
} from 'react-icons/md';

import "./index.css";

// Importar microfrontends remotos
const Products = lazy(() => import("moduleProducts/Products"));
const User = lazy(() => import("moduleUser/User"));
const Cart = lazy(() => import("modulePurchases/Cart"));

// Animaciones
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

// Componentes principales
const AppContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
`;

const Header = styled.header`
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1e293b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const BrandIcon = styled.div`
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
`;

const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #64748b;
  padding-left: 1.5rem;
  border-left: 1px solid #e2e8f0;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  z-index: 1;

  &:hover {
    background: #e2e8f0;
    z-index: 10;
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const UserName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
`;

const UserRole = styled.div`
  font-size: 0.75rem;
  color: #64748b;
`;

const NotificationBadge = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
  color: #64748b;
  z-index: 1;
  
  &:hover {
    background: #f1f5f9;
    z-index: 10;
  }

  &::after {
    content: '3';
    position: absolute;
    top: 4px;
    right: 4px;
    width: 18px;
    height: 18px;
    background: #ef4444;
    border-radius: 50%;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
  }
`;

const SettingsButton = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
  color: #64748b;
  position: relative;
  z-index: 1;
  
  &:hover {
    background: #f1f5f9;
    z-index: 10;
  }
`;

const MainSection = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const WelcomeSection = styled.div<{ isVisible: boolean }>`
  text-align: center;
  color: #1e293b;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.6s ease-out;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const WelcomeTitle = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem 0;
  font-weight: 800;
  color: #0f172a;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WelcomeSubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  margin: 0;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? '#ffffff' : 'transparent'};
  color: ${props => props.active ? '#3b82f6' : '#64748b'};
  border: ${props => props.active ? '2px solid #3b82f6' : '2px solid transparent'};
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${props => props.active ? '0 2px 8px rgba(59, 130, 246, 0.15)' : 'none'};
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.active ? '#ffffff' : '#f1f5f9'};
    color: ${props => props.active ? '#3b82f6' : '#475569'};
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.6s ease-out 0.2s backwards;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: visible;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    z-index: 10;

    &::before {
      opacity: 1;
    }
  }
  
  * {
    position: relative;
    z-index: 1;
    pointer-events: auto;
  }
`;

const CardIcon = styled.div<{ color: string }>`
  width: 64px;
  height: 64px;
  background: ${props => props.color};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`;

const CardDescription = styled.p`
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const CardStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const StatChange = styled.div<{ positive?: boolean }>`
  font-size: 0.75rem;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 2px;
`;

const ContentWrapper = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${slideUp} 0.4s ease-out;
  min-height: 500px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #e5e7eb;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: #6b7280;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

type ViewType = 'home' | 'products' | 'users' | 'cart';

const App = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return now.toLocaleDateString('es-MX', options);
  };

  return (
    <AppContainer>
      <Header>
        <HeaderLeft>
          <Brand>
            <BrandIcon>
              <MdHome size={24} />
            </BrandIcon>
            TechCorp Portal
          </Brand>
          <DateInfo>
            <MdCalendarToday size={18} />
            {getCurrentDate()}
          </DateInfo>
        </HeaderLeft>
        <HeaderRight>
          <UserInfo>
            <UserAvatar>AT</UserAvatar>
            <UserDetails>
              <UserName>Aldair Toala</UserName>
              <UserRole>Administrador</UserRole>
            </UserDetails>
          </UserInfo>
          <NotificationBadge>
            <MdNotifications size={24} />
          </NotificationBadge>
          <SettingsButton>
            <MdSettings size={24} />
          </SettingsButton>
        </HeaderRight>
      </Header>

      <MainSection>
        <WelcomeSection isVisible={currentView === 'home'}>
          <WelcomeTitle>Bienvenido a TechCorp Portal</WelcomeTitle>
          <WelcomeSubtitle>Gestiona tu empresa de manera inteligente y eficiente</WelcomeSubtitle>
        </WelcomeSection>

        <TabsContainer>
          <Tab active={currentView === 'home'} onClick={() => setCurrentView('home')}>
            <MdHome size={20} />
            Inicio
          </Tab>
          <Tab active={currentView === 'products'} onClick={() => setCurrentView('products')}>
            <MdShoppingCart size={20} />
            Productos
          </Tab>
          <Tab active={currentView === 'users'} onClick={() => setCurrentView('users')}>
            <MdPerson size={20} />
            Usuarios
          </Tab>
          <Tab active={currentView === 'cart'} onClick={() => setCurrentView('cart')}>
            <MdShoppingCart size={20} />
            Carrito
          </Tab>
        </TabsContainer>

        {currentView === 'home' && (
          <CardGrid>
            <Card onClick={() => setCurrentView('products')}>
              <CardIcon color="linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)">
                <MdInventory />
              </CardIcon>
              <CardTitle>Catálogo de Productos</CardTitle>
              <CardDescription>
                Administra tu inventario completo, gestiona precios, descuentos y controla el stock de todos tus productos en tiempo real.
              </CardDescription>
              <CardStats>
                <Stat>
                  <StatValue>8</StatValue>
                  <StatLabel>Total Productos</StatLabel>
                  <StatChange positive>
                    <MdTrendingUp size={12} />
                    +2 este mes
                  </StatChange>
                </Stat>
                <Stat>
                  <StatValue>7</StatValue>
                  <StatLabel>Disponibles</StatLabel>
                  <StatChange>
                    Stock bajo: 3
                  </StatChange>
                </Stat>
              </CardStats>
            </Card>

            <Card onClick={() => setCurrentView('users')}>
              <CardIcon color="linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)">
                <MdPeople />
              </CardIcon>
              <CardTitle>Equipo de Trabajo</CardTitle>
              <CardDescription>
                Gestiona perfiles de empleados, roles, permisos y accesos. Mantén tu equipo organizado, productivo y seguro.
              </CardDescription>
              <CardStats>
                <Stat>
                  <StatValue>8</StatValue>
                  <StatLabel>Total Usuarios</StatLabel>
                  <StatChange positive>
                    <MdTrendingUp size={12} />
                    +1 este mes
                  </StatChange>
                </Stat>
                <Stat>
                  <StatValue>7</StatValue>
                  <StatLabel>Activos</StatLabel>
                  <StatChange>
                    En línea: 5
                  </StatChange>
                </Stat>
              </CardStats>
            </Card>

            <Card onClick={() => setCurrentView('cart')}>
              <CardIcon color="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)">
                <MdShoppingCart />
              </CardIcon>
              <CardTitle>Carrito de Compras</CardTitle>
              <CardDescription>
                Selecciona productos del catálogo y asigna un cliente para realizar compras. Gestiona tu carrito de manera eficiente.
              </CardDescription>
              <CardStats>
                <Stat>
                  <StatValue>0</StatValue>
                  <StatLabel>Productos</StatLabel>
                  <StatChange>
                    En carrito
                  </StatChange>
                </Stat>
                <Stat>
                  <StatValue>$0.00</StatValue>
                  <StatLabel>Total</StatLabel>
                  <StatChange>
                    Pendiente
                  </StatChange>
                </Stat>
              </CardStats>
            </Card>

            <Card>
              <CardIcon color="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)">
                <MdAttachMoney />
              </CardIcon>
              <CardTitle>Ventas y Finanzas</CardTitle>
              <CardDescription>
                Monitorea ingresos, gastos, análisis de rentabilidad y métricas financieras clave de tu negocio.
              </CardDescription>
              <CardStats>
                <Stat>
                  <StatValue>$124.5K</StatValue>
                  <StatLabel>Ingresos Mensuales</StatLabel>
                  <StatChange positive>
                    <MdTrendingUp size={12} />
                    +18.2%
                  </StatChange>
                </Stat>
                <Stat>
                  <StatValue>342</StatValue>
                  <StatLabel>Ventas Totales</StatLabel>
                  <StatChange positive>
                    +45 este mes
                  </StatChange>
                </Stat>
              </CardStats>
            </Card>

            <Card>
              <CardIcon color="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)">
                <MdLocalShipping />
              </CardIcon>
              <CardTitle>Logística y Envíos</CardTitle>
              <CardDescription>
                Controla pedidos, envíos, entregas y gestión de almacenes para optimizar tus operaciones logísticas.
              </CardDescription>
              <CardStats>
                <Stat>
                  <StatValue>28</StatValue>
                  <StatLabel>Pedidos Pendientes</StatLabel>
                  <StatChange>
                    En proceso: 15
                  </StatChange>
                </Stat>
                <Stat>
                  <StatValue>98.5%</StatValue>
                  <StatLabel>Tasa de Entrega</StatLabel>
                  <StatChange positive>
                    <MdTrendingUp size={12} />
                    +2.1%
                  </StatChange>
                </Stat>
              </CardStats>
            </Card>

            <Card>
              <CardIcon color="linear-gradient(135deg, #ef4444 0%, #dc2626 100%)">
                <MdSecurity />
              </CardIcon>
              <CardTitle>Seguridad y Accesos</CardTitle>
              <CardDescription>
                Gestiona permisos, roles de seguridad, auditorías y protege la información sensible de tu empresa.
              </CardDescription>
              <CardStats>
                <Stat>
                  <StatValue>100%</StatValue>
                  <StatLabel>Sistema Seguro</StatLabel>
                  <StatChange positive>
                    Sin incidentes
                  </StatChange>
                </Stat>
                <Stat>
                  <StatValue>24/7</StatValue>
                  <StatLabel>Monitoreo Activo</StatLabel>
                  <StatChange positive>
                    Protegido
                  </StatChange>
                </Stat>
              </CardStats>
            </Card>

            <Card>
              <CardIcon color="linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)">
                <MdBarChart />
              </CardIcon>
              <CardTitle>Analíticas y Reportes</CardTitle>
              <CardDescription>
                Visualiza métricas clave, análisis de rendimiento, tendencias y genera reportes detallados de tu negocio.
              </CardDescription>
              <CardStats>
                <Stat>
                  <StatValue>+24.8%</StatValue>
                  <StatLabel>Crecimiento Anual</StatLabel>
                  <StatChange positive>
                    <MdTrendingUp size={12} />
                    Superando metas
                  </StatChange>
                </Stat>
                <Stat>
                  <StatValue>4.7</StatValue>
                  <StatLabel>Rating Promedio</StatLabel>
                  <StatChange positive>
                    Excelente
                  </StatChange>
                </Stat>
              </CardStats>
            </Card>
          </CardGrid>
        )}

        {currentView === 'products' && (
          <ContentWrapper>
            <Suspense fallback={
              <LoadingSpinner>
                <Spinner />
                <LoadingText>Cargando módulo de productos...</LoadingText>
              </LoadingSpinner>
            }>
              <Products />
            </Suspense>
          </ContentWrapper>
        )}

        {currentView === 'users' && (
          <ContentWrapper>
            <Suspense fallback={
              <LoadingSpinner>
                <Spinner />
                <LoadingText>Cargando módulo de usuarios...</LoadingText>
              </LoadingSpinner>
            }>
              <User />
            </Suspense>
          </ContentWrapper>
        )}

        {currentView === 'cart' && (
          <ContentWrapper>
            <Suspense fallback={
              <LoadingSpinner>
                <Spinner />
                <LoadingText>Cargando carrito de compras...</LoadingText>
              </LoadingSpinner>
            }>
              <Cart />
            </Suspense>
          </ContentWrapper>
        )}
      </MainSection>
    </AppContainer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);