export type OrderStatus = "pending" | "canceled" | "processing" | "delivering" | "delivered"

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo'
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && <span data-testid="badge" className="rounded-full h-2 w-2 bg-slate-400" />}
      {status === 'canceled' && <span data-testid="badge" className="rounded-full h-2 w-2 bg-rose-500" />}
      {status === 'delivered' && <span data-testid="badge" className="rounded-full h-2 w-2 bg-emerald-500" />}
      {['processing', 'delivering'].includes(status) && <span data-testid="badge" className="rounded-full h-2 w-2 bg-amber-500" />}

      <span className="font-medium text-muted-foreground">{orderStatusMap[status]}</span>
    </div>
  )

}