import { MapPin, Package, Calendar } from 'lucide-react';

interface DeliveryInfoProps {
  location: string;
  pickupDate: string;
  pickupTime: string;
}

export function DeliveryInfo({ location, pickupDate, pickupTime }: DeliveryInfoProps) {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[20px] p-5 border-2 border-primary/10">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <MapPin className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">Delivery Location</p>
          <p className="text-foreground">{location}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 bg-white rounded-[12px] p-3">
          <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Pickup Date</p>
            <p className="text-sm text-foreground">{pickupDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-[12px] p-3">
          <Package className="w-4 h-4 text-primary flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Pickup Time</p>
            <p className="text-sm text-foreground">{pickupTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
