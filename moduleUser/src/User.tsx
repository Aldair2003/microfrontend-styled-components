import React from 'react';
import styled from 'styled-components';
import { 
  MdPeople, 
  MdEmail, 
  MdBusiness, 
  MdCheckCircle, 
  MdCancel, 
  MdEdit, 
  MdPhone,
  MdCalendarToday,
  MdStar,
  MdTrendingUp,
  MdLocationOn,
  MdShoppingCart
} from 'react-icons/md';

const UserContainer = styled.div`
  padding: 0;
  background: #ffffff;
`;

const Header = styled.div`
  padding: 24px 32px;
  border-bottom: 1px solid #e5e7eb;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  color: #111827;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Subtitle = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const StatItem = styled.div`
  text-align: right;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #8b5cf6;
  line-height: 1;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const UserList = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;
`;

// Componente PerfilUsuario según requisitos de la actividad
export const PerfilUsuario = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: #8b5cf6;
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
    transform: translateY(-4px);

    &::before {
      opacity: 1;
    }
  }
`;

const UserHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 16px;
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: 600;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
`;

const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const UserName = styled.h3`
  color: #111827;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 6px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserRole = styled.p`
  color: #8b5cf6;
  font-size: 14px;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

const ExperienceBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #f3f4f6;
  border-radius: 12px;
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 16px;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #6b7280;
  font-size: 14px;
`;

const DetailIcon = styled.div`
  color: #9ca3af;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const DetailText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;

const SkillsContainer = styled.div`
  margin: 16px 0;
  padding: 12px;
  background: #f9fafb;
  border-radius: 8px;
`;

const SkillsLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillTag = styled.span`
  padding: 4px 10px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  font-size: 12px;
  color: #4b5563;
  font-weight: 500;
`;

const ProjectsInfo = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 8px;
  margin-bottom: 16px;
`;

const ProjectStat = styled.div`
  flex: 1;
  text-align: center;
`;

const ProjectValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #8b5cf6;
  line-height: 1;
  margin-bottom: 4px;
`;

const ProjectLabel = styled.div`
  font-size: 11px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const UserFooter = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const StatusBadge = styled.div<{ status: 'active' | 'inactive' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  background: ${props => props.status === 'active' ? '#ecfdf5' : '#fef2f2'};
  color: ${props => props.status === 'active' ? '#059669' : '#dc2626'};
`;

// Componente BotonEditar según requisitos de la actividad
export const BotonEditar = styled.button`
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  department: string;
  location: string;
  joinDate: string;
  experience: string;
  status: 'active' | 'inactive';
  skills: string[];
  activeProjects: number;
  completedProjects: number;
  rating: number;
}

const users: User[] = [
  {
    id: 1,
    name: 'Sofia Ramírez',
    role: 'Arquitecta de Software',
    email: 'sofia.ramirez@techcorp.io',
    phone: '+52 55 1234 5678',
    department: 'Ingeniería',
    location: 'Ciudad de México, México',
    joinDate: '08/04/2020',
    experience: '8 años',
    status: 'active',
    skills: ['Microservicios', 'Cloud Architecture', 'Kubernetes', 'Azure'],
    activeProjects: 6,
    completedProjects: 24,
    rating: 4.9
  },
  {
    id: 2,
    name: 'Diego Morales',
    role: 'Data Scientist',
    email: 'diego.morales@techcorp.io',
    phone: '+52 55 2345 6789',
    department: 'Analytics',
    location: 'Guadalajara, México',
    joinDate: '14/07/2021',
    experience: '6 años',
    status: 'active',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Pandas'],
    activeProjects: 4,
    completedProjects: 16,
    rating: 4.8
  },
  {
    id: 3,
    name: 'Valentina Castro',
    role: 'Diseñadora de Producto',
    email: 'valentina.castro@techcorp.io',
    phone: '+52 55 3456 7890',
    department: 'Diseño',
    location: 'Monterrey, México',
    joinDate: '22/02/2023',
    experience: '5 años',
    status: 'inactive',
    skills: ['Sketch', 'InVision', 'Design Systems', 'User Testing'],
    activeProjects: 0,
    completedProjects: 11,
    rating: 4.7
  },
  {
    id: 4,
    name: 'Andrés Herrera',
    role: 'Tech Lead',
    email: 'andres.herrera@techcorp.io',
    phone: '+52 55 4567 8901',
    department: 'Ingeniería',
    location: 'Puebla, México',
    joinDate: '30/09/2018',
    experience: '10 años',
    status: 'active',
    skills: ['Leadership', 'System Design', 'Code Review', 'Mentoring'],
    activeProjects: 7,
    completedProjects: 32,
    rating: 5.0
  },
  {
    id: 5,
    name: 'Camila Torres',
    role: 'Security Engineer',
    email: 'camila.torres@techcorp.io',
    phone: '+52 55 5678 9012',
    department: 'Seguridad',
    location: 'Querétaro, México',
    joinDate: '11/12/2022',
    experience: '4 años',
    status: 'active',
    skills: ['Penetration Testing', 'OWASP', 'SIEM', 'Cryptography'],
    activeProjects: 3,
    completedProjects: 9,
    rating: 4.6
  },
  {
    id: 6,
    name: 'Mateo Jiménez',
    role: 'Mobile Developer',
    email: 'mateo.jimenez@techcorp.io',
    phone: '+52 55 6789 0123',
    department: 'Desarrollo Móvil',
    location: 'Tijuana, México',
    joinDate: '05/05/2021',
    experience: '5 años',
    status: 'active',
    skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
    activeProjects: 5,
    completedProjects: 14,
    rating: 4.7
  },
  {
    id: 7,
    name: 'Isabella Ruiz',
    role: 'QA Automation Engineer',
    email: 'isabella.ruiz@techcorp.io',
    phone: '+52 55 7890 1234',
    department: 'Calidad',
    location: 'Cancún, México',
    joinDate: '19/03/2023',
    experience: '3 años',
    status: 'active',
    skills: ['Selenium', 'Cypress', 'Jest', 'API Testing'],
    activeProjects: 2,
    completedProjects: 7,
    rating: 4.5
  },
  {
    id: 8,
    name: 'Sebastián Vega',
    role: 'Cloud Solutions Architect',
    email: 'sebastian.vega@techcorp.io',
    phone: '+52 55 8901 2345',
    department: 'Infraestructura',
    location: 'Mérida, México',
    joinDate: '25/10/2020',
    experience: '7 años',
    status: 'active',
    skills: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'Monitoring'],
    activeProjects: 4,
    completedProjects: 19,
    rating: 4.8
  }
];

const User: React.FC = () => {
  const handleEditar = (userName: string) => {
    alert(`Editar perfil de: ${userName}`);
  };

  const handleSeleccionarCliente = (user: User) => {
    // Guardar cliente seleccionado en localStorage
    const customerData = {
      id: user.id,
      name: user.name,
      email: user.email
    };
    localStorage.setItem('selectedCustomer', JSON.stringify(customerData));
    
    alert(`Cliente "${user.name}" seleccionado para el carrito!\n\nVe al carrito para agregar productos y finalizar la compra.`);
    
    // Disparar evento personalizado para notificar al carrito
    window.dispatchEvent(new CustomEvent('customerSelected'));
  };

  const activeUsers = users.filter(u => u.status === 'active').length;
  const totalUsers = users.length;

  return (
    <UserContainer>
      <Header>
        <HeaderLeft>
          <Title>
            <MdPeople size={28} color="#8b5cf6" />
            Equipo de Trabajo
          </Title>
          <Subtitle>Gestión de recursos humanos y equipos</Subtitle>
        </HeaderLeft>
        <StatsContainer>
          <StatItem>
            <StatValue>{totalUsers}</StatValue>
            <StatLabel>Total</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{activeUsers}</StatValue>
            <StatLabel>Activos</StatLabel>
          </StatItem>
        </StatsContainer>
      </Header>
      <UserList>
        {users.map(user => (
          <PerfilUsuario key={user.id}>
            <UserHeader>
              <Avatar>{user.name.charAt(0)}</Avatar>
              <UserInfo>
                <UserName>{user.name}</UserName>
                <UserRole>{user.role}</UserRole>
                <ExperienceBadge>
                  <MdStar size={14} color="#fbbf24" />
                  {user.experience} • ⭐ {user.rating}
                </ExperienceBadge>
              </UserInfo>
            </UserHeader>
            <UserDetails>
              <DetailRow>
                <DetailIcon>
                  <MdEmail size={18} />
                </DetailIcon>
                <DetailText>{user.email}</DetailText>
              </DetailRow>
              <DetailRow>
                <DetailIcon>
                  <MdPhone size={18} />
                </DetailIcon>
                <DetailText>{user.phone}</DetailText>
              </DetailRow>
              <DetailRow>
                <DetailIcon>
                  <MdBusiness size={18} />
                </DetailIcon>
                <DetailText>{user.department}</DetailText>
              </DetailRow>
              <DetailRow>
                <DetailIcon>
                  <MdLocationOn size={18} />
                </DetailIcon>
                <DetailText>{user.location}</DetailText>
              </DetailRow>
              <DetailRow>
                <DetailIcon>
                  <MdCalendarToday size={18} />
                </DetailIcon>
                <DetailText>Ingreso: {user.joinDate}</DetailText>
              </DetailRow>
            </UserDetails>
            <SkillsContainer>
              <SkillsLabel>Habilidades</SkillsLabel>
              <SkillsList>
                {user.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillsList>
            </SkillsContainer>
            <ProjectsInfo>
              <ProjectStat>
                <ProjectValue>{user.activeProjects}</ProjectValue>
                <ProjectLabel>Activos</ProjectLabel>
              </ProjectStat>
              <ProjectStat>
                <ProjectValue>{user.completedProjects}</ProjectValue>
                <ProjectLabel>Completados</ProjectLabel>
              </ProjectStat>
              <ProjectStat>
                <ProjectValue>
                  <MdTrendingUp size={18} />
                </ProjectValue>
                <ProjectLabel>Rendimiento</ProjectLabel>
              </ProjectStat>
            </ProjectsInfo>
            <UserFooter>
              <StatusBadge status={user.status}>
                {user.status === 'active' ? <MdCheckCircle size={16} /> : <MdCancel size={16} />}
                {user.status === 'active' ? 'Activo' : 'Inactivo'}
              </StatusBadge>
              <div style={{ display: 'flex', gap: '8px' }}>
                <BotonEditar 
                  onClick={() => handleSeleccionarCliente(user)}
                  style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
                >
                  <MdShoppingCart size={16} />
                  Seleccionar para Carrito
                </BotonEditar>
                <BotonEditar onClick={() => handleEditar(user.name)}>
                  <MdEdit size={16} />
                  Editar
                </BotonEditar>
              </div>
            </UserFooter>
          </PerfilUsuario>
        ))}
      </UserList>
    </UserContainer>
  );
};

export default User;
