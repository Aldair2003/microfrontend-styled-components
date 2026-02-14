import React from 'react';
import styled from 'styled-components';
import { 
  MdInventory, 
  MdCheckCircle, 
  MdCancel, 
  MdShoppingCart,
  MdStar,
  MdLocalOffer,
  MdCategory,
  MdInfo
} from 'react-icons/md';

const ProductsContainer = styled.div`
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
  color: #3b82f6;
  line-height: 1;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductList = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;
`;

// Componente CardProducto según requisitos de la actividad
export const CardProducto = styled.div`
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
    background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
    transform: translateY(-4px);

    &::before {
      opacity: 1;
    }
  }
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 12px;
`;

const ProductInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const CategoryBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #eff6ff;
  border-radius: 12px;
  font-size: 11px;
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductName = styled.h3`
  color: #111827;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 6px 0;
  line-height: 1.3;
`;

const BrandName = styled.p`
  color: #6b7280;
  font-size: 13px;
  margin: 0 0 12px 0;
  font-weight: 500;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #3b82f6;
  font-size: 24px;
  font-weight: 700;
`;

const OriginalPrice = styled.div`
  color: #9ca3af;
  font-size: 16px;
  text-decoration: line-through;
  font-weight: 500;
`;

const DiscountBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
`;

const ProductDescription = styled.p`
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
  min-height: 44px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
  padding: 12px;
  background: #f9fafb;
  border-radius: 8px;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #4b5563;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const RatingStars = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #fbbf24;
`;

const RatingText = styled.span`
  color: #6b7280;
  font-size: 13px;
  font-weight: 500;
`;

const ReviewsCount = styled.span`
  color: #9ca3af;
  font-size: 12px;
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
  gap: 12px;
  margin-bottom: 12px;
`;

const StockBadge = styled.div<{ inStock: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  background: ${props => props.inStock ? '#ecfdf5' : '#fef2f2'};
  color: ${props => props.inStock ? '#059669' : '#dc2626'};
`;

const StockInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StockText = styled.span`
  color: #6b7280;
  font-size: 13px;
  font-weight: 500;
`;

const StockWarning = styled.span<{ lowStock: boolean }>`
  color: ${props => props.lowStock ? '#f59e0b' : '#6b7280'};
  font-size: 11px;
  font-weight: 600;
`;

// Componente BotonComprar según requisitos de la actividad
export const BotonComprar = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  width: 100%;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  stock: number;
  rating: number;
  reviews: number;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Smartphone Galaxy Ultra',
    brand: 'TechMax',
    category: 'Electrónica',
    price: 899.99,
    originalPrice: 1099.99,
    discount: 18,
    description: 'Smartphone de última generación con pantalla AMOLED de 6.8", procesador octa-core y cámara de 108MP con zoom óptico 10x.',
    stock: 23,
    rating: 4.7,
    reviews: 342,
    features: ['128GB almacenamiento', '8GB RAM', 'Carga rápida 65W', 'Resistente al agua IP68']
  },
  {
    id: 2,
    name: 'Auriculares Inalámbricos Pro',
    brand: 'SoundWave',
    category: 'Audio',
    price: 179.99,
    originalPrice: 249.99,
    discount: 28,
    description: 'Auriculares con cancelación activa de ruido, batería de 30 horas y calidad de sonido Hi-Fi.',
    stock: 45,
    rating: 4.8,
    reviews: 521,
    features: ['ANC activo', '30h batería', 'Bluetooth 5.3', 'Resistente al sudor']
  },
  {
    id: 3,
    name: 'Tablet Pro 12.9"',
    brand: 'TechMax',
    category: 'Computadoras',
    price: 1299.99,
    description: 'Tablet profesional con pantalla Retina de 12.9 pulgadas, chip M2 y compatibilidad con Apple Pencil.',
    stock: 0,
    rating: 4.9,
    reviews: 189,
    features: ['Pantalla Retina', 'Chip M2', '256GB', 'Soporte Apple Pencil']
  },
  {
    id: 4,
    name: 'Smartwatch Fitness Elite',
    brand: 'FitTech',
    category: 'Wearables',
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    description: 'Reloj inteligente con GPS integrado, monitor de frecuencia cardíaca y más de 50 modos de ejercicio.',
    stock: 12,
    rating: 4.6,
    reviews: 267,
    features: ['GPS integrado', 'Monitor cardíaco', 'Resistente al agua', 'Batería 7 días']
  },
  {
    id: 5,
    name: 'Cámara DSLR Profesional',
    brand: 'PhotoPro',
    category: 'Fotografía',
    price: 1599.99,
    originalPrice: 1999.99,
    discount: 20,
    description: 'Cámara DSLR full frame de 45MP con grabación de video 4K y sistema de estabilización de imagen.',
    stock: 7,
    rating: 4.9,
    reviews: 98,
    features: ['45MP full frame', 'Video 4K', 'Estabilización', 'WiFi y Bluetooth']
  },
  {
    id: 6,
    name: 'Altavoz Bluetooth Portátil',
    brand: 'SoundWave',
    category: 'Audio',
    price: 89.99,
    description: 'Altavoz portátil con sonido 360°, batería de 20 horas y resistencia al agua IPX7.',
    stock: 67,
    rating: 4.5,
    reviews: 412,
    features: ['Sonido 360°', '20h batería', 'IPX7', 'Bluetooth 5.0']
  },
  {
    id: 7,
    name: 'Drone 4K con Gimbal',
    brand: 'SkyTech',
    category: 'Drones',
    price: 599.99,
    originalPrice: 799.99,
    discount: 25,
    description: 'Drone con cámara 4K, gimbal de 3 ejes, vuelo de 30 minutos y rango de control de 7km.',
    stock: 15,
    rating: 4.7,
    reviews: 203,
    features: ['Cámara 4K', 'Gimbal 3 ejes', '30min vuelo', 'Rango 7km']
  },
  {
    id: 8,
    name: 'Monitor Gaming Curvo 32"',
    brand: 'GameTech',
    category: 'Monitores',
    price: 449.99,
    originalPrice: 549.99,
    discount: 18,
    description: 'Monitor gaming curvo QHD de 32 pulgadas con 165Hz de refresco, HDR y tiempo de respuesta 1ms.',
    stock: 9,
    rating: 4.8,
    reviews: 156,
    features: ['QHD 2560x1440', '165Hz', 'HDR10', '1ms respuesta']
  }
];

const Products: React.FC = () => {
  const handleCompra = (product: Product) => {
    if (product.stock === 0) {
      alert('Este producto no tiene stock disponible');
      return;
    }

    // Obtener carrito actual del localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Buscar si el producto ya está en el carrito
    const existingItem = currentCart.find((item: any) => item.product.id === product.id);
    
    if (existingItem) {
      // Si ya existe, aumentar cantidad si hay stock disponible
      if (existingItem.quantity < product.stock) {
        existingItem.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(currentCart));
        alert(`¡Cantidad de "${product.name}" actualizada en el carrito!`);
      } else {
        alert(`No hay más stock disponible de "${product.name}"`);
      }
    } else {
      // Si no existe, agregarlo al carrito
      const newItem = {
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          stock: product.stock
        },
        quantity: 1
      };
      currentCart.push(newItem);
      localStorage.setItem('cart', JSON.stringify(currentCart));
      alert(`¡Producto "${product.name}" agregado al carrito!\n\nVe al carrito para seleccionar un cliente y finalizar la compra.`);
    }
    
    // Disparar evento personalizado para notificar al carrito
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<MdStar key={i} size={16} />);
    }
    if (hasHalfStar) {
      stars.push(<MdStar key="half" size={16} style={{ opacity: 0.5 }} />);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<MdStar key={`empty-${i}`} size={16} style={{ opacity: 0.2 }} />);
    }
    return stars;
  };

  const totalProducts = products.length;
  const availableProducts = products.filter(p => p.stock > 0).length;
  const lowStockProducts = products.filter(p => p.stock > 0 && p.stock < 10).length;

  return (
    <ProductsContainer>
      <Header>
        <HeaderLeft>
          <Title>
            <MdInventory size={28} color="#3b82f6" />
            Catálogo de Productos
          </Title>
          <Subtitle>Gestión y consulta de inventario de productos</Subtitle>
        </HeaderLeft>
        <StatsContainer>
          <StatItem>
            <StatValue>{totalProducts}</StatValue>
            <StatLabel>Total</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{availableProducts}</StatValue>
            <StatLabel>Disponibles</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{lowStockProducts}</StatValue>
            <StatLabel>Stock Bajo</StatLabel>
          </StatItem>
        </StatsContainer>
      </Header>
      <ProductList>
        {products.map(product => {
          const lowStock = product.stock > 0 && product.stock < 10;
          
          return (
            <CardProducto key={product.id}>
              <ProductHeader>
                <ProductInfo>
                  <CategoryBadge>
                    <MdCategory size={12} />
                    {product.category}
                  </CategoryBadge>
                  <ProductName>{product.name}</ProductName>
                  <BrandName>{product.brand}</BrandName>
                </ProductInfo>
                <PriceContainer>
                  {product.originalPrice && product.discount && (
                    <DiscountBadge>
                      <MdLocalOffer size={12} />
                      -{product.discount}%
                    </DiscountBadge>
                  )}
                  <PriceRow>
                    <PriceTag>
                      {formatPrice(product.price)}
                    </PriceTag>
                  </PriceRow>
                  {product.originalPrice && (
                    <OriginalPrice>{formatPrice(product.originalPrice)}</OriginalPrice>
                  )}
                </PriceContainer>
              </ProductHeader>
              
              <ProductDescription>{product.description}</ProductDescription>

              <RatingContainer>
                <RatingStars>
                  {renderStars(product.rating)}
                </RatingStars>
                <RatingText>{product.rating.toFixed(1)}</RatingText>
                <ReviewsCount>({product.reviews})</ReviewsCount>
              </RatingContainer>

              <ProductDetails>
                {product.features.slice(0, 2).map((feature, index) => (
                  <DetailRow key={index}>
                    <MdInfo size={14} color="#9ca3af" />
                    <span>{feature}</span>
                  </DetailRow>
                ))}
              </ProductDetails>

              <ProductFooter>
                <StockBadge inStock={product.stock > 0}>
                  {product.stock > 0 ? <MdCheckCircle size={16} /> : <MdCancel size={16} />}
                  {product.stock > 0 ? 'Disponible' : 'Agotado'}
                </StockBadge>
                <StockInfo>
                  {product.stock > 0 && (
                    <>
                      <StockText>{product.stock} unidades</StockText>
                      {lowStock && (
                        <StockWarning lowStock={true}>
                          ⚠️ Stock bajo
                        </StockWarning>
                      )}
                    </>
                  )}
                </StockInfo>
              </ProductFooter>

              <BotonComprar 
                disabled={product.stock === 0}
                onClick={() => handleCompra(product)}
              >
                <MdShoppingCart size={18} />
                {product.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
              </BotonComprar>
            </CardProducto>
          );
        })}
      </ProductList>
    </ProductsContainer>
  );
};

export default Products;
