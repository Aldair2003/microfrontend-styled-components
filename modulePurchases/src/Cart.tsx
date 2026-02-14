import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  MdShoppingCart, 
  MdAdd, 
  MdRemove,
  MdDelete,
  MdPerson,
  MdInventory,
  MdAttachMoney,
  MdCheckCircle,
  MdCancel,
  MdShoppingBag,
  MdInfo,
  MdReceipt,
  MdTrendingUp,
  MdClose,
  MdCalendarToday,
  MdEmail
} from 'react-icons/md';

const CartContainer = styled.div`
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
  color: #f59e0b;
  line-height: 1;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 32px;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
`;

const SectionTitle = styled.h3`
  color: #111827;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  max-height: 400px;
  overflow-y: auto;
  padding: 8px;
`;

const ProductCard = styled.div<{ selected?: boolean }>`
  background: ${props => props.selected ? '#fef3c7' : '#f9fafb'};
  border: 2px solid ${props => props.selected ? '#f59e0b' : '#e5e7eb'};
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #f59e0b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
  }
`;

const ProductName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #f59e0b;
  margin-bottom: 8px;
`;

const ProductStock = styled.div<{ inStock: boolean }>`
  font-size: 12px;
  color: ${props => props.inStock ? '#059669' : '#dc2626'};
  font-weight: 500;
`;

const AddButton = styled.button`
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
  }
  
  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;

const CustomersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 400px;
  overflow-y: auto;
  padding: 8px;
`;

const CustomerCard = styled.div<{ selected?: boolean }>`
  background: ${props => props.selected ? '#ede9fe' : '#f9fafb'};
  border: 2px solid ${props => props.selected ? '#8b5cf6' : '#e5e7eb'};
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #8b5cf6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
  }
`;

const CustomerName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CustomerEmail = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

const CartSection = styled.div`
  grid-column: 1 / -1;
  background: #ffffff;
  border: 2px solid #f59e0b;
  border-radius: 16px;
  padding: 24px;
  margin-top: 16px;
`;

const SelectedCustomer = styled.div`
  background: #f3f4f6;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CustomerAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const RemoveCustomerButton = styled.button`
  padding: 8px 16px;
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #fee2e2;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`;

const ItemDetails = styled.div`
  font-size: 13px;
  color: #6b7280;
  display: flex;
  gap: 16px;
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 4px;
`;

const QuantityButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: #f3f4f6;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111827;
  font-weight: 700;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e5e7eb;
  }
`;

const Quantity = styled.span`
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  color: #111827;
`;

const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #f59e0b;
  min-width: 100px;
  text-align: right;
`;

const DeleteButton = styled.button`
  padding: 8px;
  background: #fef2f2;
  color: #dc2626;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: #fee2e2;
  }
`;

const CartSummary = styled.div`
  border-top: 2px solid #e5e7eb;
  padding-top: 20px;
  margin-top: 20px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  color: #6b7280;
`;

const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 2px solid #e5e7eb;
  margin-top: 16px;
`;

const TotalLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

const TotalAmount = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #f59e0b;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
  }
  
  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #6b7280;
`;

const EmptyStateIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
`;

const EmptyStateText = styled.p`
  font-size: 16px;
  margin: 0;
`;

// Modal de confirmación
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${props => props.isOpen ? 'fadeIn' : 'none'} 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  background: white;
  border-radius: 24px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${props => props.isOpen ? 'slideUp' : 'none'} 0.3s ease;
  position: relative;
  
  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  padding: 32px;
  border-radius: 24px 24px 0 0;
  color: white;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #10b981;
  font-size: 48px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  text-align: center;
`;

const ModalSubtitle = styled.p`
  font-size: 16px;
  margin: 0;
  text-align: center;
  opacity: 0.9;
`;

const ModalBody = styled.div`
  padding: 32px;
`;

const OrderNumber = styled.div`
  background: #f0fdf4;
  border: 2px solid #10b981;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  text-align: center;
`;

const OrderNumberLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  font-weight: 600;
`;

const OrderNumberValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #10b981;
  font-family: 'Courier New', monospace;
`;

const InfoSection = styled.div`
  margin-bottom: 24px;
`;

const InfoSectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CustomerInfoModal = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CustomerAvatarModal = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: 700;
  flex-shrink: 0;
`;

const CustomerDetails = styled.div`
  flex: 1;
`;

const CustomerNameModal = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
`;

const CustomerEmailModal = styled.div`
  font-size: 14px;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ProductsListModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProductItemModal = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductInfoModal = styled.div`
  flex: 1;
`;

const ProductNameModal = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`;

const ProductDetailsModal = styled.div`
  font-size: 13px;
  color: #6b7280;
  display: flex;
  gap: 16px;
`;

const ProductTotalModal = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #f59e0b;
  min-width: 100px;
  text-align: right;
`;

const SummarySection = styled.div`
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 12px;
  padding: 20px;
  margin-top: 24px;
`;

const SummaryRowModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  color: #6b7280;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SummaryTotalModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  margin-top: 16px;
  border-top: 2px solid #e5e7eb;
`;

const TotalLabelModal = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

const TotalAmountModal = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ModalFooter = styled.div`
  padding: 24px 32px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 12px;
`;

const ModalButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  border: none;
  
  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
    }
  ` : `
    background: #f3f4f6;
    color: #111827;
    
    &:hover {
      background: #e5e7eb;
    }
  `}
`;

// Interfaces
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface Customer {
  id: number;
  name: string;
  email: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Datos de ejemplo (en producción vendrían de los módulos remotos)
const availableProducts: Product[] = [
  { id: 1, name: 'Smartphone Galaxy Ultra', price: 899.99, stock: 23 },
  { id: 2, name: 'Auriculares Inalámbricos Pro', price: 179.99, stock: 45 },
  { id: 4, name: 'Smartwatch Fitness Elite', price: 299.99, stock: 12 },
  { id: 6, name: 'Altavoz Bluetooth Portátil', price: 89.99, stock: 67 },
  { id: 7, name: 'Drone 4K con Gimbal', price: 599.99, stock: 15 },
  { id: 8, name: 'Monitor Gaming Curvo 32"', price: 449.99, stock: 9 }
];

const availableCustomers: Customer[] = [
  { id: 1, name: 'Carlos Mendoza', email: 'carlos.mendoza@email.com' },
  { id: 2, name: 'María González', email: 'maria.gonzalez@email.com' },
  { id: 3, name: 'Roberto Silva', email: 'roberto.silva@email.com' },
  { id: 4, name: 'Ana Martínez', email: 'ana.martinez@email.com' },
  { id: 5, name: 'Luis Hernández', email: 'luis.hernandez@email.com' },
  { id: 6, name: 'Patricia López', email: 'patricia.lopez@email.com' }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const loadCart = () => {
      const savedCart = localStorage.getItem('cart');
      const savedCustomer = localStorage.getItem('selectedCustomer');
      
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (e) {
          console.error('Error loading cart:', e);
        }
      }
      if (savedCustomer) {
        try {
          setSelectedCustomer(JSON.parse(savedCustomer));
        } catch (e) {
          console.error('Error loading customer:', e);
        }
      }
    };

    loadCart();

    // Escuchar eventos de actualización del carrito
    const handleCartUpdate = () => {
      loadCart();
    };

    const handleCustomerSelect = () => {
      loadCart();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('customerSelected', handleCustomerSelect);

    // También verificar cambios periódicamente (por si acaso)
    const interval = setInterval(loadCart, 1000);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('customerSelected', handleCustomerSelect);
      clearInterval(interval);
    };
  }, []);

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (selectedCustomer) {
      localStorage.setItem('selectedCustomer', JSON.stringify(selectedCustomer));
    } else {
      localStorage.removeItem('selectedCustomer');
    }
  }, [selectedCustomer]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCartItems(cartItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      }
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
    setSelectedProductId(product.id);
    setTimeout(() => setSelectedProductId(null), 1000);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.product.id === productId) {
        const newQuantity = item.quantity + delta;
        if (newQuantity <= 0) {
          return null;
        }
        if (newQuantity > item.product.stock) {
          return item;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const selectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const removeCustomer = () => {
    setSelectedCustomer(null);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.16; // 16% IVA
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ORD-${timestamp}-${random}`;
  };

  const handleCheckout = () => {
    if (!selectedCustomer) {
      alert('Por favor selecciona un cliente');
      return;
    }
    if (cartItems.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    
    const orderNumber = generateOrderNumber();
    const order = {
      orderNumber,
      customer: selectedCustomer,
      items: cartItems,
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      total: calculateTotal(),
      date: new Date().toLocaleDateString('es-MX', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    setOrderData(order);
    setShowSuccessModal(true);
    
    // Limpiar carrito
    setCartItems([]);
    setSelectedCustomer(null);
    localStorage.removeItem('cart');
    localStorage.removeItem('selectedCustomer');
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setOrderData(null);
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = calculateTotal();

  return (
    <CartContainer>
      <Header>
        <HeaderLeft>
          <Title>
            <MdShoppingCart size={28} color="#f59e0b" />
            Carrito de Compras
          </Title>
          <Subtitle>Selecciona productos del catálogo y asigna un cliente para realizar la compra</Subtitle>
        </HeaderLeft>
        <StatsContainer>
          <StatItem>
            <StatValue>{totalItems}</StatValue>
            <StatLabel>Productos</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{formatPrice(totalValue)}</StatValue>
            <StatLabel>Total</StatLabel>
          </StatItem>
        </StatsContainer>
      </Header>

      <MainContent>
        <Section>
          <SectionTitle>
            <MdInventory size={20} />
            Catálogo de Productos
          </SectionTitle>
          <ProductsGrid>
            {availableProducts.map(product => (
              <ProductCard 
                key={product.id} 
                selected={selectedProductId === product.id}
              >
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                <ProductStock inStock={product.stock > 0}>
                  {product.stock > 0 ? `${product.stock} disponibles` : 'Sin stock'}
                </ProductStock>
                <AddButton
                  disabled={product.stock === 0}
                  onClick={() => addToCart(product)}
                >
                  <MdAdd size={16} />
                  Agregar
                </AddButton>
              </ProductCard>
            ))}
          </ProductsGrid>
        </Section>

        <Section>
          <SectionTitle>
            <MdPerson size={20} />
            Seleccionar Cliente
          </SectionTitle>
          <CustomersList>
            {availableCustomers.map(customer => (
              <CustomerCard
                key={customer.id}
                selected={selectedCustomer?.id === customer.id}
                onClick={() => selectCustomer(customer)}
              >
                <CustomerName>
                  <MdPerson size={18} />
                  {customer.name}
                </CustomerName>
                <CustomerEmail>{customer.email}</CustomerEmail>
              </CustomerCard>
            ))}
          </CustomersList>
        </Section>

        <CartSection>
          <SectionTitle>
            <MdShoppingBag size={20} />
            Resumen del Carrito
          </SectionTitle>

          {selectedCustomer && (
            <SelectedCustomer>
              <CustomerInfo>
                <CustomerAvatar>{selectedCustomer.name.charAt(0)}</CustomerAvatar>
                <div>
                  <div style={{ fontWeight: 600, color: '#111827', marginBottom: '4px' }}>
                    {selectedCustomer.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>
                    {selectedCustomer.email}
                  </div>
                </div>
              </CustomerInfo>
              <RemoveCustomerButton onClick={removeCustomer}>
                <MdCancel size={14} />
                Cambiar Cliente
              </RemoveCustomerButton>
            </SelectedCustomer>
          )}

          {cartItems.length === 0 ? (
            <EmptyState>
              <EmptyStateIcon>
                <MdShoppingCart size={48} />
              </EmptyStateIcon>
              <EmptyStateText>
                {selectedCustomer 
                  ? `Agrega productos del catálogo para ${selectedCustomer.name}`
                  : 'Selecciona un cliente y agrega productos al carrito'}
              </EmptyStateText>
            </EmptyState>
          ) : (
            <>
              <CartItems>
                {cartItems.map(item => (
                  <CartItem key={item.product.id}>
                    <ItemInfo>
                      <ItemName>{item.product.name}</ItemName>
                      <ItemDetails>
                        <span>Precio: {formatPrice(item.product.price)}</span>
                        <span>Stock: {item.product.stock}</span>
                      </ItemDetails>
                    </ItemInfo>
                    <ItemControls>
                      <QuantityControl>
                        <QuantityButton
                          onClick={() => updateQuantity(item.product.id, -1)}
                          disabled={item.quantity <= 1}
                        >
                          <MdRemove size={16} />
                        </QuantityButton>
                        <Quantity>{item.quantity}</Quantity>
                        <QuantityButton
                          onClick={() => updateQuantity(item.product.id, 1)}
                          disabled={item.quantity >= item.product.stock}
                        >
                          <MdAdd size={16} />
                        </QuantityButton>
                      </QuantityControl>
                      <ItemPrice>{formatPrice(item.product.price * item.quantity)}</ItemPrice>
                      <DeleteButton onClick={() => removeFromCart(item.product.id)}>
                        <MdDelete size={18} />
                      </DeleteButton>
                    </ItemControls>
                  </CartItem>
                ))}
              </CartItems>

              <CartSummary>
                <SummaryRow>
                  <span>Subtotal:</span>
                  <span>{formatPrice(calculateSubtotal())}</span>
                </SummaryRow>
                <SummaryRow>
                  <span>IVA (16%):</span>
                  <span>{formatPrice(calculateTax())}</span>
                </SummaryRow>
                <SummaryTotal>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalAmount>
                    <MdTrendingUp size={20} />
                    {formatPrice(calculateTotal())}
                  </TotalAmount>
                </SummaryTotal>
              </CartSummary>

              <CheckoutButton
                disabled={!selectedCustomer || cartItems.length === 0}
                onClick={handleCheckout}
              >
                <MdReceipt size={20} />
                Finalizar Compra
              </CheckoutButton>
            </>
          )}
        </CartSection>
      </MainContent>

      {/* Modal de confirmación */}
      <ModalOverlay isOpen={showSuccessModal} onClick={closeModal}>
        <ModalContent isOpen={showSuccessModal} onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <CloseButton onClick={closeModal}>
              <MdClose size={20} />
            </CloseButton>
            <SuccessIcon>
              <MdCheckCircle size={48} />
            </SuccessIcon>
            <ModalTitle>¡Compra Realizada Exitosamente!</ModalTitle>
            <ModalSubtitle>Tu orden ha sido procesada y guardada</ModalSubtitle>
          </ModalHeader>

          {orderData && (
            <ModalBody>
              <OrderNumber>
                <OrderNumberLabel>Número de Orden</OrderNumberLabel>
                <OrderNumberValue>{orderData.orderNumber}</OrderNumberValue>
              </OrderNumber>

              <InfoSection>
                <InfoSectionTitle>
                  <MdPerson size={20} />
                  Información del Cliente
                </InfoSectionTitle>
                <CustomerInfoModal>
                  <CustomerAvatarModal>
                    {orderData.customer.name.charAt(0)}
                  </CustomerAvatarModal>
                  <CustomerDetails>
                    <CustomerNameModal>{orderData.customer.name}</CustomerNameModal>
                    <CustomerEmailModal>
                      <MdEmail size={14} />
                      {orderData.customer.email}
                    </CustomerEmailModal>
                  </CustomerDetails>
                </CustomerInfoModal>
              </InfoSection>

              <InfoSection>
                <InfoSectionTitle>
                  <MdShoppingBag size={20} />
                  Productos Comprados
                </InfoSectionTitle>
                <ProductsListModal>
                  {orderData.items.map((item: CartItem, index: number) => (
                    <ProductItemModal key={index}>
                      <ProductInfoModal>
                        <ProductNameModal>{item.product.name}</ProductNameModal>
                        <ProductDetailsModal>
                          <span>Cantidad: {item.quantity}</span>
                          <span>Precio unitario: {formatPrice(item.product.price)}</span>
                        </ProductDetailsModal>
                      </ProductInfoModal>
                      <ProductTotalModal>
                        {formatPrice(item.product.price * item.quantity)}
                      </ProductTotalModal>
                    </ProductItemModal>
                  ))}
                </ProductsListModal>
              </InfoSection>

              <SummarySection>
                <SummaryRowModal>
                  <span>Subtotal:</span>
                  <span>{formatPrice(orderData.subtotal)}</span>
                </SummaryRowModal>
                <SummaryRowModal>
                  <span>IVA (16%):</span>
                  <span>{formatPrice(orderData.tax)}</span>
                </SummaryRowModal>
                <SummaryTotalModal>
                  <TotalLabelModal>Total:</TotalLabelModal>
                  <TotalAmountModal>
                    <MdAttachMoney size={24} />
                    {formatPrice(orderData.total)}
                  </TotalAmountModal>
                </SummaryTotalModal>
              </SummarySection>

              <div style={{ 
                marginTop: '20px', 
                padding: '12px', 
                background: '#f0fdf4', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: '#059669'
              }}>
                <MdCalendarToday size={16} />
                <span>Fecha: {orderData.date}</span>
              </div>
            </ModalBody>
          )}

          <ModalFooter>
            <ModalButton variant="secondary" onClick={closeModal}>
              <MdClose size={18} />
              Cerrar
            </ModalButton>
            <ModalButton variant="primary" onClick={closeModal}>
              <MdCheckCircle size={18} />
              Aceptar
            </ModalButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </CartContainer>
  );
};

export default Cart;
